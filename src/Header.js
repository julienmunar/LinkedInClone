import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SideBar from "./SideBar"
import linkedin from './linkedin.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/counter/userSlice';
const Header = () => {
  const user=useSelector(selectUser)
  
  const dispatch=useDispatch()
  const handleLogout=()=>{dispatch(logout())

  }
  return (
    <div className='header'>

        
    <div className='header__left'>
        <img  src={linkedin} alt=''/>
        <div className='header__search'>
           <SearchIcon/>
            <input placeholder='Search' type="text"/>
        </div>
    </div> 
    <div className='header__right'>
      <HeaderOption title={"Home"} Icon={HomeIcon}/>
      <HeaderOption title={"My Network"} Icon={SupervisorAccountIcon}/>
      <HeaderOption title={"Jobs"} Icon={BusinessCenterIcon}/>
      <HeaderOption title={"Messaging"} Icon={ChatIcon}/>
      <HeaderOption title={"Notifications"} Icon={NotificationsIcon}/>
      <HeaderOption onClick={handleLogout} title={"me"} avatar={true}/>
    </div>    
  
    </div>
  )

}

export default Header