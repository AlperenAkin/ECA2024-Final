import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { db } from '../firebase';
import { collection, addDoc, doc } from 'firebase/firestore';
import PlayerSearchModal from './PlayerSearchModal';
import './FantasyHome.css';
import availablePlayersData from '../data/availablePlayers';

const FantasyHome = () => {
  const { currentUser } = useAuth();
  const initialBudget = 500000000;
  const [budget, setBudget] = useState(initialBudget);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamCaptain, setTeamCaptain] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState({
    LM: { name: null, price: null, nationality: null, position: 'LM' },
    ST: { name: null, price: null, nationality: null, position: 'ST' },
    RM: { name: null, price: null, nationality: null, position: 'RM' },
    CM1: { name: null, price: null, nationality: null, position: 'CM1' },
    CM2: { name: null, price: null, nationality: null, position: 'CM2' },
    CM3: { name: null, price: null, nationality: null, position: 'CM3' },
    LB: { name: null, price: null, nationality: null, position: 'LB' },
    CB1: { name: null, price: null, nationality: null, position: 'CB1' },
    CB2: { name: null, price: null, nationality: null, position: 'CB2' },
    RB: { name: null, price: null, nationality: null, position: 'RB' },
    GK: { name: null, price: null, nationality: null, position: 'GK' }
  });
  const [availablePlayers, setAvailablePlayers] = useState(availablePlayersData);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const openModal = (pos) => {
    setSelectedPosition(pos);
    setIsModalOpen(true);
  };

  const addPlayer = (player) => {
    const oldPlayer = selectedPlayers[selectedPosition];
    const newBudget = budget + (oldPlayer.name ? parseFloat(oldPlayer.price) * 1000000 : 0) - player.cost;

    if (newBudget < 0) {
      setErrorMessage(`Adding ${player.name} surpasses budget, could not add player`);
      return;
    }

    setSelectedPlayers({
      ...selectedPlayers,
      [selectedPosition]: { 
        name: player.name, 
        price: `${player.cost / 1000000}m`,
        nationality: player.nationality,
        position: player.position 
      }
    });

    setAvailablePlayers((prevPlayers) => {
      const updatedPlayers = prevPlayers.filter(p => p.name !== player.name);
      if (oldPlayer.name !== null) {
        updatedPlayers.push({
          name: oldPlayer.name,
          position: oldPlayer.position,
          nationality: oldPlayer.nationality,
          cost: parseFloat(oldPlayer.price) * 1000000
        });
      }
      return updatedPlayers;
    });

    setBudget(newBudget);
    setErrorMessage('');
  };

  const removePlayer = (pos) => {
    const player = selectedPlayers[pos];

    setSelectedPlayers({
      ...selectedPlayers,
      [pos]: { name: null, price: null, nationality: null, position: pos }
    });

    if (player.name !== null) {
      setAvailablePlayers([
        ...availablePlayers,
        {
          name: player.name,
          position: player.position,
          nationality: player.nationality,
          cost: parseFloat(player.price) * 1000000
        }
      ]);

      setBudget(budget + parseFloat(player.price) * 1000000);
    }
  };

  const renderPlayers = (positions) => {
    return positions.map((pos, index) => (
      <div key={index} className="position-container">
        <button className="player-card" onClick={() => openModal(pos.pos)}>
          <p>{selectedPlayers[pos.pos].name ? `${selectedPlayers[pos.pos].name} - ${selectedPlayers[pos.pos].price}` : 'Select Player'}</p>
          <p>{pos.pos}</p>
        </button>
        {selectedPlayers[pos.pos].name && (
          <button className="remove-player-btn" onClick={() => removePlayer(pos.pos)}>X</button>
        )}
      </div>
    ));
  };

  const attackers = [
    { pos: 'LM' },
    { pos: 'ST' },
    { pos: 'RM' },
  ];

  const midfielders = [
    { pos: 'CM1' },
    { pos: 'CM2' },
    { pos: 'CM3' },
  ];

  const defenders = [
    { pos: 'LB' },
    { pos: 'CB1' },
    { pos: 'CB2' },
    { pos: 'RB' },
  ];

  const goalkeeper = [
    { pos: 'GK' },
  ];

  const getAddedPlayers = () => {
    return Object.values(selectedPlayers).filter(player => player.name !== null);
  };

  const handleSubmitTeam = async () => {
    if (!currentUser) {
      alert('You must be logged in to submit a team');
      return;
    }

    // Validate team name and captain
    if (!teamName) {
      alert('Team name is required');
      return;
    }
    if (!teamCaptain) {
      alert('Team captain is required');
      return;
    }

    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const teamsCollectionRef = collection(userDocRef, 'teams');

      await addDoc(teamsCollectionRef, {
        teamName,
        teamCaptain,
        selectedPlayers: Object.values(selectedPlayers).filter(player => player.name)
      });

      navigate('/team-confirmation', {
        state: {
          teamName,
          teamCaptain,
          selectedPlayers: Object.values(selectedPlayers).filter(player => player.name)
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="fantasy-container">
      <div className="budget">
        <h2>Budget Remaining: <b style={{color: 'red'}}>${budget.toLocaleString()}</b></h2>
      </div>
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
      <div className="players-section">
        <div className="attackers">
          <h3>Attackers</h3>
          <div className="positions">
            {renderPlayers(attackers)}
          </div>
        </div>
        <div className="midfielders">
          <h3>Midfielders</h3>
          <div className="positions">
            {renderPlayers(midfielders)}
          </div>
        </div>
        <div className="defenders">
          <h3>Defenders</h3>
          <div className="positions">
            {renderPlayers(defenders)}
          </div>
        </div>
        <div className="goalkeeper">
          <h3>Goalkeeper</h3>
          <div className="positions">
            {renderPlayers(goalkeeper)}
          </div>
        </div>
      </div>
      <div className="fantasy-team">
        <h2>My Fantasy Team</h2>
        <div>
          <label htmlFor="teamName">Team Name:</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter team name"
          />
        </div>
        <div>
          <label htmlFor="teamCaptain">Team Captain:</label>
          <select
            id="teamCaptain"
            value={teamCaptain}
            onChange={(e) => setTeamCaptain(e.target.value)}
          >
            <option value="">Select Captain</option>
            {getAddedPlayers().map((player, index) => (
              <option key={index} value={player.name}>{player.name}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSubmitTeam}>Submit Team</button>
      </div>
      <PlayerSearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPlayer={addPlayer}
        availablePlayers={availablePlayers}
      />
    </div>
  );
};

export default FantasyHome;
