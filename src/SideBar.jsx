import React from 'react'
import './SideBar.css'
import { Avatar } from '@mui/material'
import { selectUser } from './features/counter/userSlice';
import {useSelector} from 'react-redux'
const SideBar = () => {
const user=useSelector(selectUser)
const recentItem=(topic)=>{return(

    <div className="sidebar__recentItem">
        <span className="sidebar__hash"># </span>
        <p>{topic}</p>
        </div>

)
}

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA.fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Julien Munar</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                
            <div className='sidebar__stat'>
            <p>Who Viewed you</p>
            <p className='sidebar__statNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
            <p>Views of post</p>
            <p className='sidebar__statNumber'>2,543</p>
            </div>
                </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software')}
                {recentItem('design')}
                {recentItem('developper')}
                </div>
        </div>

    )
}

export default SideBar