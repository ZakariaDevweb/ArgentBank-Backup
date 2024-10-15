import React from 'react';
import '../../assets/style/style.css';

const ErrorPages = () => {
  return (
    <div className="error-page">
      <main className="main-content">
        <div className="error-message">
          <h2>404</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="home-link">Go to Homepage</a>
        </div>
      </main>
    </div>
  );
};

export default ErrorPages;