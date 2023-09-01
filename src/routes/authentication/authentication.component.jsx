import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromUserAuth
} from '../../utils/firebase/firebase.utility';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import Button from '../../components/button/button.component';

//sign in method
const Authentication = () =>{
    //this method creates userDoc using google auth provider.
    const googleSignIn = async ()=>{
        const {user} = await signInWithGooglePopup();
        const UserRefDoc = await createUserDocumentFromUserAuth({user});
    }

    return(
        <div>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
}

export default Authentication;