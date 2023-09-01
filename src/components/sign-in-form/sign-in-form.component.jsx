import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromUserAuth, SignInAuthUserWithEmailAndPassword  } from "../../utils/firebase/firebase.utility";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.styles.scss';

//Default values for state initialization
const defaultFormFields = {
    email: '',
    password:'',
}
// sign up form method
const SignInForm = ()=>{
    //using useState hook to initialize state
    const [formField, setFormFields] = useState(defaultFormFields);
    //destructuring different values from FormField
    const { email, password} = formField;
    //methd to reset form field after signing up
    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }
    //method to handle change. takes an event and destructure name and its value from target and changes the state
    const changeHandler = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formField, [name]: value}); 
    }
    const googleSignIn = async ()=>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromUserAuth({user});
    }
    // async method taking an event and creating the userDocRef if passwords matches
    const handleSubmit = async (event)=>{

        event.preventDefault();

        try {
            const response = await SignInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();

        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Wrong Password');
                    break;
                case 'auth/user-not-found':
                    alert("No User Found");
                    break;
                default:
                    alert(error.message);
            }
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email" 
                    required 
                    onChange={changeHandler} 
                    name="email" 
                    value={email}/>
                <FormInput 
                    label="Password" 
                    type="password" 
                    required 
                    onChange={changeHandler} 
                    name="password" 
                    value={password}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={googleSignIn}> Google Sign In</Button>

                </div>
            </form>
        </div>
    );
}

export default SignInForm;