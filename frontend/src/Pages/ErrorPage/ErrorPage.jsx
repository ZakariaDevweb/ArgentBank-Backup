import React from 'react';
import '../../assets/styles/styles.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <header className="header">
        <div className="logo">
          <h1>ARGENTBANK</h1>
        </div>
        <div className="sign-in">
          <a href="/login">Sign In</a>
        </div>
      </header>
      <main className="main-content">
        <div className="error-message">
          <h2>404</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="home-link">Go to Homepage</a>
        </div>
      </main>
      <footer className="footer">
        <p>Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default ErrorPage;