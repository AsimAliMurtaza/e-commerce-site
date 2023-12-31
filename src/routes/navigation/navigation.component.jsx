import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utility";

import { UserContext } from "../../contexts/users.context";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "../navigation/navigation.styles.scss";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {user ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
