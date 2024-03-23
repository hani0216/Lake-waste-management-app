import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Topnav1 from './components/Topnav1';
import DashboardANPE from './components/Dashboard/Dashboard_ANPE/DahsboardANPE.js'
import Home1 from './components/Home1';
import Apropos from './components/Apropos.js';
import DashboardAdmin from './components/Dashboard/Dashboard_Admin/DashboardAdmin.js';
import SelectProfile from './components/SelectProfile';
import LoginClient from './components/LogIn/loginClient.js';
import Profile from './components/ProfilePages/Profile.js'
import LoginAdmin from './components/LogIn/loginAdmin.js';
import LoginAnpe from './components/LogIn/loginAnpe.js';
import DashboardClient from './components/Dashboard/Dashboard_Client/DashboardClient.js';
import CONTACT from './components/ContactForm/Contact.js' ;
import POSTCONTACT from './components/ContactForm/PostContact.js' ;
import AjouterClient from './components/AjouterClient.js';
import Messages from './components/Dashboard/SideBar/Messages.js';

const App = () => {
  return (
    <Router>
      <Topnav1 />
      <Routes>
        <Route exact path="/" element={<Home1 />} />
        <Route path="/about" element={<Apropos />} />
        <Route path="/select-profile" element={<SelectProfile />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/loginAnpe" element={<LoginAnpe />} />
        <Route path="/loginClient" element={<LoginClient />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/DashboardANPE" element={<DashboardANPE />} />
        <Route path="/DashboardClient" element={<DashboardClient />} />
        <Route path="/Contact" element={< CONTACT />} />
        <Route path="/PostContact" element={< POSTCONTACT />} />
        <Route path="/AjouterClient" element={<AjouterClient/>} />
        <Route path="/ProfilePage/:clientName" element={<>
  <Topnav1 />
  <Profile />
</>} />        <Route path="/messages" element={<Messages />} />

      </Routes>
    </Router>
  );
}

export default App;
