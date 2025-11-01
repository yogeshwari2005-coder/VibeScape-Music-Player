import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-overlay">
        <h1>Millions of Songs. Free on Spotify.</h1>
        <div className="button-group">
          <button className="home-btn primary" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="home-btn secondary" onClick={() => navigate('/signup')}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;