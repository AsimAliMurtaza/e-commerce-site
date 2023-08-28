import {signInWithGooglePopup, createUserDocumentFromUserAuth} from '../../utils/firebase/firebase.utility';


const SignIn = () =>{

    const googleSignIn = async ()=>{
        const {user} = await signInWithGooglePopup();
        const UserRefDoc = await createUserDocumentFromUserAuth(user);
    }

    return(
        <div>
            <h1>Sign in option</h1>
            <button onClick={googleSignIn}>
                Sign In
            </button>
        </div>
    );
}

export default SignIn;