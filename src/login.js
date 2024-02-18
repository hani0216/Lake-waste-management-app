import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="container">
      <div className="heading">Se connecter</div>
      <form action="" className="form">
        <input required="" className="input" type="email" name="name" id="name" placeholder="Nom" />
        <input required="" className="input" type="password" name="password" id="password" placeholder="Mot de passe" />
        <input required="" className="input" type="mail" name="mail" id="E-mail" placeholder="mail" />
        <input required="" className="input" type="text" name="adress" id="adress" placeholder="Adresse" />
        <input required="" className="input" type="tel" name="tel" id="tel" placeholder="Numero de téléphone" />


        <input className="login-button" type="submit" value="Valider" />
      </form>
    </div>
  );
}

export default Login;
