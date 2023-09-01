import './button.styles.scss';


const BUTTON_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}
//custom button which takes children and some other props and returns the button according to the arguments passed.
const Button =({children, buttonType, ...otherProps})=>{
    return(
        <button className={`button-container ${BUTTON_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    );
}

export default Button;