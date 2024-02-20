import React from 'react';
import ReactDOM from 'react-dom';
import './SelectProfile.css';

function SelectProfile() {
  return (
    <div className='interface' >
      
      <div className="d-grid gap-2 col-6 mx-auto profileList l2">
        <ul className="l1">
          <li><button className="button li1">ADMIN</button></li>
          <li><button className="button li1">ANPE</button></li>
          <li><button className="button li1">Client</button></li>
        </ul>
      </div>
    </div>
  );
}

export default SelectProfile;
