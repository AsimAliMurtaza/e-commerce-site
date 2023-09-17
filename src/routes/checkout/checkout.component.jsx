import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext,  } from '../../contexts/cart.context';


const Checkout = ()=>{

    const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext);
    return(
        <div>
            i am checkout
            {
                cartItems.map((cartItem)=>{
                    const {id, name, quantity} = cartItem;
                    return(
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <span onClick={()=>addItemToCart(cartItem)}> increase </span>
                            <span onClick={()=>removeItemFromCart(cartItem)}> decrease </span>
                        </div>
                    );}
                )
            }
        </div>
    )
}

export default Checkout;