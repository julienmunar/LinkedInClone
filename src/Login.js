import React,{useState} from 'react'
import Linkedin_logo from './LinkedIn_Logo.svg.png'
import './login.css'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
const Login = () => {

    const [name,setName]=useState('')
    const [picUrl,setPicUrl]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch =useDispatch()





    const register =()=> {
        if(!name) {
            return alert('Please enter a Full Name ! ')
        }
    createUserWithEmailAndPassword(auth,email,password)
    .then(updateProfile(auth.currentUser,{displayName:name, photoURL:picUrl}) )
    .then(()=>dispatch(login({email:auth.currentUser.email,uid:auth.currentUser.uid,displayName:name, photoUrl:picUrl})))
    .catch(error=>alert(error))
    }
    const loginToApp=(e)=>{
        e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user=userCredential.user
        console.log('userlogged',user)
        dispatch(login({email:user.email,uid:user.uid, displayName:user.displayName,photoUrl:user.photoURL}))
    })    
    .catch(error=>alert(error))

    }

  return (
    <div className='login'>

    <img src={Linkedin_logo} alt=''/>
    <form>
        <input
        type="text"
        onChange={(e)=>setName(e.target.value)}
        value={name}
        placeholder="Full name (required if registering)"
        />
        <input
        placeholder='Profile pic URL (optional)'
        type="text"
        onChange={(e)=>setPicUrl(e.target.value)}
        value={picUrl}
        />
         <input
         onChange={(e)=>setEmail(e.target.value)}
        placeholder='Email'
        type="email"
        value={email}
        />
           <input onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'
        type="password"
        value={password}
        />

    
   <button type='submit' onClick={loginToApp}>Sign in</button>

    </form>
    <p>Not a member? {" "}
            <span className='login_register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login