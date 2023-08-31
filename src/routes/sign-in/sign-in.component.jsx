import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromUserAuth
} from '../../utils/firebase/firebase.utility';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () =>{

    // useEffect(async ()=>{
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    // }, []);

    const googleSignIn = async ()=>{
        const {user} = await signInWithGooglePopup();
        const UserRefDoc = await createUserDocumentFromUserAuth({user});
    }

    return(
        <div>
            <h1>Sign in option</h1>
            <button onClick={googleSignIn}>
                Sign In
            </button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In with Redirect
            </button> */}
        </div>
    );
}

export default SignIn;