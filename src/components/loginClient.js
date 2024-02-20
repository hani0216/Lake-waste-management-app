import React from 'react';
import './loginClient.css';

function LoginClient() {
  return (
    <div className="container">
      <div className="heading">Se connecter</div>
      <form action="" className="form">
        <input required="" className="input" type="email" name="name" id="name" placeholder="Nom" />
        <input required="" className="input" type="password" name="password" id="password" placeholder="Mot de passe" />
        <input className="login-button" type="submit" value="Valider" />
      </form>
    </div>
  );
}

export default LoginClient;
