import React from 'react';
import './Dashboard.css';
import SideBar from '../SideBar/SideBar';
import DashTable from '../DashboardTable/DashTable'

function DashboardAdmin() {
  return (
    <div  className='allt'>
      <SideBar className="sidebr"/>
      <DashTable className="tab" />
    </div>
  );
}

export default DashboardAdmin;
