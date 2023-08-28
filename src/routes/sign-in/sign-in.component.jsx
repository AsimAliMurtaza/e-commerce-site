import {signInWithGooglePopup} from '../../utils/firebase/firebase.utility';


const SignIn = () =>{

    const googleSignIn = async ()=>{
        const response = await signInWithGooglePopup();
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