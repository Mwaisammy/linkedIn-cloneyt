import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { BusinessCenter, Chat, Home, Notifications, SupervisorAccount } from '@mui/icons-material';
import HeaderOption from './HeaderOption';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Header() {

  const user = useSelector(selectUser);
const dispatch = useDispatch()
  const logoutOfApp = ()=>{
    dispatch(logout())

    auth.signOut();
  }
  return (
    <div className="header">
        {/* <h2>This is a header</h2> */}

        <div className="header__left">
          <img src="linkedin.png" alt="linkedin" />
                <div className="header__search">
                  < SearchIcon/>
                    <input placeholder='Search' type="text" />
                </div>
        </div>
            <div className="header__right">
              <HeaderOption  Icon={Home}  title="Home" />
              <HeaderOption  Icon={SupervisorAccount}title="My Network" />
              <HeaderOption Icon={BusinessCenter} title="Jobs" />
              <HeaderOption Icon={Chat} title="Messaging" />
              <HeaderOption Icon={Notifications} title="Notifications" />
              <HeaderOption avatar={true} onClick={logoutOfApp} title="me"/>    
              
                          



            </div>
    </div>
    
  )
}

export default Header;