import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Navigation.css';

function Navigation() {

  const location = useLocation();
  const [currentSection, setCurrentSection] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('group-standings')) {
      setCurrentSection('group-standings');
    } else if (path.includes('tournament-bracket')) {
      setCurrentSection('tournament-bracket');
    } else if (path.includes('match-scores')) {
      setCurrentSection('match-scores');
    } else if (path.includes('fantasy-home')) {
      setCurrentSection('fantasy-home');
    } else {
      setCurrentSection('');
    }
  }, [location]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      alert('Failed to log out');
    }
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className="container d-flex justify-content-between">
        <Link className="navbar-brand" to="/">ECA2024</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={`nav-link ${currentSection === 'group-standings' ? 'active' : ''}`} to="/group-standings">Group Standings</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${currentSection === 'tournament-bracket' ? 'active' : ''}`} to="/tournament-bracket">Tournament Bracket</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${currentSection === 'match-scores' ? 'active' : ''}`} to="/match-scores">Match Scores/Highlights</Link>
            </li>
            <li className="nav-item">
              <div className="navigation-align">
              <Link className={`nav-link ${currentSection === 'fantasy-home' ? 'active' : ''}`} to="/fantasy-home">Build my Fantasy Team</Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-hammer text-light" viewBox="0 0 16 16">
                <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334"/>
              </svg>
              </div>
            </li>
            {currentUser ? (
              <>
                <li className="nav-item">
                  <div className="navigation-align">
                  <Link className="nav-link" to="/my-account">My Account</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-square text-light" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                  </svg>
                  </div>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
