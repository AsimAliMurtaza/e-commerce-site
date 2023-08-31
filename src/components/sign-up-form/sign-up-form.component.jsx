import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromUserAuth } from "../../utils/firebase/firebase.utility";

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword: ''
}

const SignUpForm = ()=>{
    const [formField, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formField;
    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password!== confirmPassword){
            alert("passwords do not match");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromUserAuth(user, {displayName});
            resetFormFields();

        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('email already in use');
            } else{
                console.log("error", error);
            }
        }
    }

    const changeHandler = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formField, [name]: value}); 
    }

    return(
        <div>
            <h1>Sign Up with email</h1>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name"
                    type="text" 
                    required 
                    onChange={changeHandler} 
                    name="displayName" 
                    value={displayName}/>
                <FormInput
                    label="Email"
                    type="email" 
                    required 
                    onChange={changeHandler} 
                    name="email" 
                    value={email}/>
                <FormInput 
                    label="Email" 
                    type="password" 
                    required 
                    onChange={changeHandler} 
                    name="password" 
                    value={password}/>
                <FormInput 
                    label=""Confirm Password
                    type="password" 
                    required 
                    onChange={changeHandler} 
                    name="confirmPassword" 
                    value={confirmPassword}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUpForm;