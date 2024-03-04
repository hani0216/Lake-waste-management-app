import React, { useState } from 'react';
import './loginAdmin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
  const navigate = useNavigate(); // Utilisation de useNavigate au lieu de history
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/admins/login", { email, password });
      if (res.data === "exist") {
        navigate("/DashboardAdmin"); // Utilisation de navigate avec la bonne syntaxe
      } else if (res.data === "notexist") {
        setMessage("Email ou mot de passe incorrect. Si vous n'êtes pas encore inscrit, veuillez nous contacter !")
      }
    } catch (error) {
      alert("Erreur: " + error.message);
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

export default LoginAdmin;
