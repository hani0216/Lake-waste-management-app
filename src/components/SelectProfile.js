import React from 'react';
import { Link } from 'react-router-dom';
import './SelectProfile.css';

function SelectProfile() {
  return (
    <div className='interface'>
      <div className="d-grid gap-2 col-6 mx-auto profileList l2">
        <ul className="l1">
          <li><button className="button li1"><Link to="/loginAdmin" className="link">ADMINISTRATEUR</Link></button></li>
          <li><button className="button li1"><Link to="/loginAnpe" className="link">ANPE</Link></button></li>
          <li><button className="button li1"><Link to="/loginClient" className="link">Client</Link></button></li>
        </ul>
      </div>
    </div>
  );
}

export default SelectProfile;
