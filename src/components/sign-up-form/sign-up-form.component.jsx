import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromUserAuth,
} from "../../utils/firebase/firebase.utility";

import { UserContext } from "../../contexts/users.context";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

//Default values for state initialization
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
// sign up form method
const SignUpForm = () => {
  //using useState hook to initialize state
  const [formField, setFormFields] = useState(defaultFormFields);
  const {setUser} = useContext(UserContext);
  //destructuring different values from FormField
  const { displayName, email, password, confirmPassword } = formField;
  //methd to reset form field after signing up
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  //method to handle change. takes an event and destructure name and its value from target and changes the state
  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formField, [name]: value });
  };
  // async method taking an event and creating the userDocRef if passwords matches
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    //try catch to create userDoc
    try {
      //gets a user as a response and pass it to createUserDoc method along with user object and its relevent username
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setUser(user);
      await createUserDocumentFromUserAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      } else {
        console.log("error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
