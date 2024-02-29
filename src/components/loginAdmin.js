import React, { useState } from 'react';
import './loginAdmin.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3005/admins", { email, password });
      if (res.data === "exist") {
        history("/DashboardAdmin");
      } else if (res.data === "notexist") {
        alert("Utilisateur non trouvé");
      }
    } catch (error) {
      alert("Erreur: " + error.message);
            console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="heading">Se connecter</div>
      <form onSubmit={handleSubmit} className="form">
        <div>{message}</div>
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
      </form>
    </div>
  );
}

export default LoginAdmin;
