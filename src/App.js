import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import Header from './Header';
import SideBar from './SideBar'
import Feed from './Feed';
import { login,logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Widgets from './Widgets';
function App() {
  const dispatch=useDispatch()
  const user = useSelector(selectUser)
  console.log(user)
  useEffect(()=>{onAuthStateChanged(auth, (user)=>{
    if (user){
      dispatch(
        login({
          email:user.email,
          uid:user.uid,
          displayName:user.displayName,
          photoUrl:user.photoURL
        })
      )
      console.log(user)
      //user is logged
    }else{
      //user is  logged out
      dispatch(logout())
    }
  })

  },[])
  return (
    <div className="app">
   <Header/>

{
  !user ? (<Login/>) : ( 
 
 
  <div className='app__body'>
   <SideBar/>
   <Feed/>
   <Widgets/>
   </div>)
}

  

    </div>
  );
}

export default App;
