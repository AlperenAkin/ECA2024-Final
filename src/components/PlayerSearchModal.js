import React, { useState, useEffect } from 'react';
import './PlayerSearchModal.css';

const PlayerSearchModal = ({ isOpen, onClose, onAddPlayer, availablePlayers }) => {
  const [position, setPosition] = useState('');
  const [nationality, setNationality] = useState('');
  const [maxCost, setMaxCost] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    setFilteredPlayers(availablePlayers);
  }, [availablePlayers]);

  const handleSearch = () => {
    const filtered = availablePlayers.filter(player =>
      (position ? player.position === position : true) &&
      (nationality ? player.nationality === nationality : true) &&
      (maxCost ? player.cost <= maxCost : true)
    );
    setFilteredPlayers(filtered);
  };

  const handleAddPlayer = (player) => {
    onAddPlayer(player);
    onClose();
  };

  const positions = ['LM', 'ST', 'RM', 'CM', 'CB', 'RB', 'LB', 'GK'];
  const nationalities = [
    'France 🇫🇷', 'Germany 🇩🇪', 'England 🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Spain 🇪🇸', 'Portugal 🇵🇹', 'Netherlands 🇳🇱', 'Belgium 🇧🇪', 'Italy 🇮🇹', 'Turkiye 🇹🇷', 'Romania 🇷🇴',
    'Czechia 🇨🇿', 'Croatia 🇭🇷', 'Switzerland 🇨🇭', 'Hungary 🇭🇺', 'Georgia 🇬🇪', 'Slovenia 🇸🇮', 'Slovakia 🇸🇰', 'Albania 🇦🇱', 'Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'Denmark 🇩🇰',
    'Serbia 🇷🇸', 'Ukraine 🇺🇦', 'Poland 🇵🇱', 'Austria 🇦🇹'
  ];
  const costs = [10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000];

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="criteria">
          
          <h2 className='title-search'>Search Players</h2>
          <div className="form-group">
            <label>Position</label>
            <select className="form-control" value={position} onChange={(e) => setPosition(e.target.value)}>
              <option value="">Select Position</option>
              {positions.map((pos, index) => (
                <option key={index} value={pos}>{pos}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <select className="form-control" value={nationality} onChange={(e) => setNationality(e.target.value)}>
              <option value="">Select Nationality</option>
              {nationalities.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Max Cost</label>
            <select className="form-control" value={maxCost} onChange={(e) => setMaxCost(e.target.value)}>
              <option value="">Select Max Cost</option>
              {costs.map((cost, index) => (
                <option key={index} value={cost}>${cost.toLocaleString()}</option>
              ))}
            </select>
            
          </div>
          <button className="btn btn-primary search-button" onClick={handleSearch}>Search</button>
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className="player-results">
          {filteredPlayers.map((player, index) => (
            <div key={index} className="player-result" onClick={() => handleAddPlayer(player)}>
              <p>{player.name} - {player.position} - {player.nationality} - ${player.cost.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerSearchModal;
