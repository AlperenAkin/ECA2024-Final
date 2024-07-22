import React from 'react';
import { useNavigate } from 'react-router-dom';
import placeholderImage from '../assets/bannereuros.webp'; // Add a placeholder image in the assets folder
import { useState } from 'react';

function MainContent() {
  const navigate = useNavigate();

  const [isFrench, setIsFrench] = useState(false);

  const toggleLanguage = () => {
    setIsFrench(!isFrench);
  }

  const heroText = isFrench ? "Suivez le tournoi de football Euro 2024 en Allemagne et construisez votre équipe Fantasy Euro!" :
  "Keep track of Euro 2024 Soccer Tournament in Germany and build your Fantasy Euro Team!";

  const heroButtonText = isFrench ? "Construire l'équipe" : "Build Team";

  const descriptionText = isFrench ? "Équipe fantastique d'Euro 2024" : "Euro 2024 Fantasy Team";

  const descriptionTextt = isFrench ? " Un budget de 500 millions de dollars. Inscrivez-vous pour constituer vos onze meilleurs parmi tous les joueurs de l'euro. Consultez les faits saillants, commentez et suivez tous les jeux."
  : "500 million dollar budget. Sign up to build your best eleven from all players of the euros. View highlights, comment and track all games.";

  const groupStandingsButton = isFrench ? "Classement du groupe" : "Group Standings";

  const tournamentBracketButton = isFrench ? "Tableau du tournoi" : "Tournament Bracket";

  const matchScoresButton = isFrench ? "Faits saillants/Résultats des matchs" : "Highlights/Match Scores";

  return (
    <main className="main-content py-3">
      <div className="d-flex flex-row-reverse align-items-baseline">
        
        <button 
            aria-label='button to toggle language'
            id='language-toggle-button'
            className="btn btn-warning mx-4 px-4"
            
            onClick={toggleLanguage}
            >{isFrench ? "EN" : "FR"}</button>
          <label for="language-toggle-button">{isFrench ? "Switch to English:" : "Passer en Francais:"} </label>
      </div>
      <div className= "container text-center">
        <h2>ECA2024</h2>
        <p aria-label='text to summarize website and encourage user to build their squad'>{heroText}</p>
        <button 
          aria-label='button to navigate to fantasy homepage'
          className="btn btn-primary mb-4" 
          onClick={() => navigate('/fantasy-home')}
        >
          {heroButtonText}
        </button>
        <img src={placeholderImage} alt="Euro 2024" className="img-fluid mb-4" />
        <h3 >{descriptionText}</h3>
        <p aria-label='text to describe purpose of the site'>{descriptionTextt}</p>
        <div className="row">
          <div className="col-md-4">
            <button 
              aria-label='button to navigate to group standings page'
              className="btn btn-dark btn-block mb-2" 
              onClick={() => navigate('/group-standings')}
            >
              {groupStandingsButton}
            </button>
          </div>
          <div className="col-md-4">
            <button 
              aria-label='button to navigate to tournament bracket page'
              className="btn btn-dark btn-block mb-2" 
              onClick={() => navigate('/tournament-bracket')}
            >
              {tournamentBracketButton}
            </button>
          </div>
          <div className="col-md-4">
            <button 
              aria-label='button to navigate to match scores page'
              className="btn btn-dark btn-block mb-2" 
              onClick={() => navigate('/match-scores')}
            >
              {matchScoresButton}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
