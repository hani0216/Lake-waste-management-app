// LoginClient.js
import React, { useState } from 'react';
import './loginAdmin.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function LoginClient() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:3000/users/login", { email, password });
      if (res.data === "exist") {
        navigate(`/DashboardClient/${email}`);
      } else if (res.data === "notexist") {
        setMessage("Email ou mot de passe incorrect. Si vous n'êtes pas encore inscrit, veuillez nous contacter !");
      }
    } catch (error) {
      setMessage("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
      console.log(error);
    }
  }
  

  return (
    <div className="container">
      <div className="heading">Se connecter</div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          required=""
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required=""
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="login-button" type="submit" value="Valider" />
        <div className='message'>{message}</div>
      </form>
    </div>
  );
}

export default LoginClient;
