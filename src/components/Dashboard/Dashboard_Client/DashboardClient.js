import React from 'react'
import SideBarCl from './SideBarCl';
import ProfileClient from './ProfileClient';
import { useParams } from 'react-router-dom';
import Chart from './Chart';

function DashboardClient() {
  const { userName } = useParams();

  return (
    <div>
      <SideBarCl userName={userName} />
      <div className='allt'>
      <ProfileClient/></div>
      <Chart />
    </div>
  )
}

export default DashboardClient