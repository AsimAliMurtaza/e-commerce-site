import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromUserAuth
} from '../../utils/firebase/firebase.utility';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Button from '../../components/button/button.component';

//sign in method
const SignIn = () =>{

    // useEffect(async ()=>{
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    // }, []);
    //this method creates userDoc using google auth provider.
    const googleSignIn = async ()=>{
        const {user} = await signInWithGooglePopup();
        const UserRefDoc = await createUserDocumentFromUserAuth({user});
    }

    return(
        <div>
            <h2>Already have an account?</h2>
            <Button buttonType='google'  onClick={googleSignIn}>
                Sign In With Google
            </Button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In with Redirect
            </button> */}
        </div>
    );
}

export default SignIn;