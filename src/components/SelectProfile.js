import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './SelectProfile.css';
import LoginAdmin from './loginAdmin';
import LoginAnpe from './loginAnpe';
import LoginClient from './loginClient';

function SelectProfile() {
  const handleProfileClick = (profile) => {
    // Rediriger vers la page appropriée en fonction du profil sélectionné
    switch (profile) {
      case 'ADMINISTRATEUR':
        window.location.href = '/loginAdmin';
        break;
      case 'ANPE':
        window.location.href = '/adminClient';
        break;
      case 'Client':
        window.location.href = '/client';
        break;
      default:
        break;
    }
  };

  return (
    <div className='interface'>
      <div className="d-grid gap-2 col-6 mx-auto profileList l2">
        <ul className="l1">
          <li><button className="button li1" onClick={() => handleProfileClick('ADMINISTRATEUR')}>ADMINISTRATEUR</button></li>
          <li><button className="button li1" onClick={() => handleProfileClick('ANPE')}>ANPE</button></li>
          <li><button className="button li1" onClick={() => handleProfileClick('Client')}>Client</button></li>
        </ul>
      </div>
    </div>
  );
}

export default SelectProfile;
