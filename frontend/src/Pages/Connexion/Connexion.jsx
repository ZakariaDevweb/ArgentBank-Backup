import { Form } from "react-router-dom";

import "./Connexion.css";

export default function Sign() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form method="post">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" name="rememberMe" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <p className="error">L'email ou le mot de passe est invalide</p>
          <button type="submit" className="sign-in-button">Sign In</button>
        </Form>
      </section>
    </main>
  );
}


