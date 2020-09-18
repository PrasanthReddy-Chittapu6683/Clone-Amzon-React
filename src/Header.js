import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'


function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div>
            <div className="header">
                <div className="herader__sidepanelIcon">

                    <MenuIcon />
                </div>
                <Link to="/">

                    <img className="header__logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
                </Link>

                <div className="herader__search">
                    <input type='text' className="header__searchInput"></input>
                    <SearchIcon className="header__SartchIcon"></SearchIcon>
                </div>
                <div className="herader__nav">


                    <Link to={!user && '/login'}>
                        <div onClick={handleAuthentication} className="herader__option">
                            <span className="header__optionLineOne"> Hello {user?.email}</span>
                            <span className="header__optionLineTwo"> {user ? 'Sign Out' : 'Sign In'} </span>
                        </div>
                    </Link>
                    <Link to='/orders'>
                        <div className="herader__option">
                            <span className="header__optionLineOne"> Returns</span>
                            <span className="header__optionLineTwo"> & Orders</span>
                        </div>
                    </Link>
                    <div className="herader__option">
                        <span className="header__optionLineOne"> Your </span>
                        <span className="header__optionLineTwo"> Prime</span>
                    </div>
                    <Link to='/checkout'>
                        <div className="header__optionBasket" >
                            <AddShoppingCartIcon />
                            <span className="header__optionLineTwo header__basketCount">{basket?.length} </span>
                        </div>
                    </Link>


                </div>
            </div>
            <div className="header headerTow">
                {/* <ul>
                    <li>Hi</li>
                    <li>Hi</li>
                    <li>Hi</li>
                </ul> */}
            </div>
        </div>
    )
}

export default Header
