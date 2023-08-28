import { Avatar } from '@mui/material'
import React from 'react'  
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (

<div className="sidebar">
    <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1688019983766-216c6a06fe0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt=""/>
        <Avatar src={user.photoUrl}className='sidebar__avatar'>
           {user.email[0]} 
           {/* {console.log(user.email)} */}
        </Avatar>
        <h2>{user.name}</h2>
      {/* {  console.log(user.name)} */}
        <h4>{user.email}</h4>

    </div>
    <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>

        </div>
        <div className="sidebar__stat">
            <p>View on post</p>
            <p className="sidebar__statNumber">2,448</p>

        </div>
    </div>

    <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
       
    </div>
</div>
    )
}

export default Sidebar