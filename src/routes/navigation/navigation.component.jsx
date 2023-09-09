import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import '../navigation/navigation.styles.scss';
import { UserContext } from '../../contexts/users.context';
import { signOutUser } from '../../utils/firebase/firebase.utility';

const Navigation = ()=>{
  const {user,setUser} = useContext(UserContext);
  const SignOutHandler = async ()=>{
    await signOutUser();
    setUser(null);
  }
  console.log(user);
    return(
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to= '/'>
          <Logo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to= 'shop'>
            SHOP
            </Link>
            {user ? (
              <span className='nav-link' onClick={SignOutHandler}>SIGN OUT</span>
            ) : (
              <Link className='nav-link' to= 'auth'>
              SIGN IN
              </Link>
            )}
          </div>
        </div>
        <Outlet/>
      </Fragment>
    );
};
export default Navigation;