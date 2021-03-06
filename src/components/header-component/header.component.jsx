import React from 'react';
import './header.styles.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assests/crown.svg'
import { connect } from 'react-redux'
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart.icon";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()} >
                        SIGN OUT
                    </div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
            }
            <CartIcon/>
        </div>
        {
            !hidden ? <CartDropdown/>: null
        }
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser: currentUser,
    hidden: hidden
});

export default connect(mapStateToProps)(Header);