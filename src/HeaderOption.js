import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'
import { selectUser } from './features/counter/userSlice'
import { useSelector } from 'react-redux'

const HeaderOption = ({avatar,Icon,title,onClick}) => {
  const user=useSelector(selectUser)
  console.log('userHeader',user?.email)
  return (
    <div onClick={onClick}  className="headerOption">
       {Icon && <Icon className="headerOption__icon"/>} 
       {avatar &&(<Avatar className="headerOption__icon">{user?.email[0]}</Avatar>)}
       <h3  className='headerOption__title'>{title}</h3>
        </div>
  )
}

export default HeaderOption