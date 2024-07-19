import React from 'react';
import './TournamentBracket.css';
import cup from '../assets/winnerscup.webp'; 
import { Link } from 'react-router-dom';


const TournamentBracket = () => {

  return (
    <div className="tournament-container">
      <div className="ro16">
        <p>Round of 16</p>

        <Link to="/match-scores#42">
        <div className="match">
          <div className="countries">
            <h5><b>Spain 🇪🇸</b></h5>
            <h5>Georgia 🇬🇪</h5>
          </div>
          <div className="score">
            <h5><b>4</b></h5>
            <h5>1</h5>
          </div> 
        </div>
        </Link>
        

        <div className="match">
        <div className="countries">
            <h5><b>Germany 🇩🇪</b></h5>
            <h5>Denmark 🇩🇰</h5>
          </div>
          <div className="score">
            <h5><b>2</b></h5>
            <h5>0</h5>
          </div>
          
        </div>
        <div className="match">
        <div className="countries">
            <h5><b>Portugal 🇵🇹</b> </h5>
            <h5>Slovenia 🇸🇮</h5>
          </div>
          <div className="score">
            <h5><b>0 (3)</b></h5>
            <h5>0 (0)</h5>
            
          </div>
          
        </div>
        <div className="match">
        <div className="countries">
            <h5><b>France 🇫🇷</b> </h5>
            <h5>Belgium 🇧🇪</h5>
          </div>
          <div className="score">
            <h5><b>1</b></h5>
            <h5>0</h5>
          </div>
          
        </div>
      </div>
      <div className="quarter">
        <p>Quarter Finals</p>
        <div className="match">
        <div className="countries">
            <h5><b>Spain 🇪🇸</b></h5>
            <h5>Germany 🇩🇪</h5>
          </div>
          <div className="score">
            <h5><b>2</b></h5>
            <h5>1</h5>
          </div>

        </div>
        <div className="match">
        <div className="countries">
            <h5><b>France 🇫🇷</b></h5>
            <h5>Portugal 🇵🇹</h5>
          </div>
          <div className="score">
            <h5><b>(5) 0</b></h5>
            <h5>(3) 0</h5>
          </div>
          
        </div>
      </div>
      <div className="semi">
        <p>Semi Finals</p>
        <div className="match">
        <div className="countries">
            <h5><b>Spain 🇪🇸</b></h5>
            <h5>France 🇫🇷</h5>
          </div>
          <div className="score">
            <h5><b>2</b></h5>
            <h5>1</h5>
          </div>
          
        </div>
      </div>
      <div className="final">
        <p>UEFA Euro 2024 Winner</p>
        <img src={cup} alt="Euro Cup" className='cup' />
        
        <div className="winner">
          <h2>Spain 🇪🇸</h2>
        </div>
        <p>Final</p>
        <div className="match">
        <div className="countries">
            <h5><b>Spain 🇪🇸</b></h5>
            <h5>England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</h5>
          </div>
          <div className="score">
            <h5><b>3</b></h5>
            <h5>0</h5>
          </div>  
        </div>
      </div>
      <div className="semi">
        <p>Semi Finals</p>
        <div className="match">
        <div className="countries">
            <h5>Netherlands 🇳🇱</h5>
            <h5><b>England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</b></h5>
          </div>
          <div className="score">
            <h5>1</h5>
            <h5><b>2</b></h5>
          </div>
          
        </div>
      </div>
      <div className="quarter">
        <p>Quarter Finals</p>
        <div className="match">
        <div className="countries">
            <h5><b>Netherlands 🇳🇱</b></h5>
            <h5>Turkiye 🇹🇷</h5>
          </div>
          <div className="score">
            <h5><b>2</b></h5>
            <h5>1</h5>
          </div>

        </div>
        <div className="match">
        <div className="countries">
            <h5><b>England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</b></h5>
            <h5>Switzerland 🇨🇭</h5>
          </div>
          <div className="score">
            <h5><b>(5) 0</b></h5>
            <h5>(3) 0</h5>
          </div>
          
        </div>
      </div>
      <div className="ro16">
        <p>Round of 16</p>
        <div className="match">
        <div className="countries">
            <h5>Romania 🇷🇴</h5>
            <h5><b>Netherlands 🇳🇱</b></h5>
          </div>
          <div className="score">
            <h5>0</h5>
            <h5><b>3</b></h5>
          </div>

        </div>
        
        <div className="match">
        <div className="countries">
            <h5>Austria 🇦🇹</h5>
            <h5><b>Turkiye 🇹🇷</b></h5>
          </div>
          <div className="score">
            <h5>1</h5>
            <h5><b>2</b></h5>
          </div>
          
        </div>
        <div className="match">
        <div className="countries">
            <h5><b>England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</b></h5>
            <h5>Slovakia 🇸🇰</h5>
          </div>
          <div className="score">
            <h5><b>2</b></h5>
            <h5>1</h5>
          </div>
          
          
        </div>
        <div className="match">
        <div className="countries">
            <h5><b>Switzerland 🇨🇭</b></h5>
            <h5>Italy 🇮🇹</h5>
          </div>
          <div className="score">
            <h5><b>1</b></h5>
            <h5>0</h5>
          </div>
          
        </div>
      </div>
    </div>
    
  );
};

export default TournamentBracket;
