import React from 'react'
import ProfileBox from './ProfileBox'
import './Profile.css'
import SideBar from '../Dashboard/SideBar/SideBar'
import EditProfile from './EditBox'
import Chart from './Chart'

function Profile() {
  return (
    <div>
        <SideBar/>
        <div className='allt'>
        <ProfileBox  />
        <EditProfile  />
        </div>
        <Chart />

    

    </div>
  )
}

export default Profile