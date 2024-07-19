import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';


const UpdateTeam = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { team } = location.state;

  const [teamName, setTeamName] = useState(team.teamName);
  const [teamCaptain, setTeamCaptain] = useState(team.teamCaptain);

  const handleUpdateTeam = async () => {
    const teamDocRef = doc(db, 'users', team.userId, 'teams', team.id);
    await updateDoc(teamDocRef, {
      teamName,
      teamCaptain
    });
    navigate('/my-account');
  };

  return (
    <div className="container py-5">
      <h2 className='text-primary'>Update Team</h2>
      <div>
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          className='form-control'
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Enter team name"
        />
      </div>
      <div>
        <label htmlFor="teamCaptain">Team Captain:</label>
        <select
          id="teamCaptain"
          className='form-control'
          value={teamCaptain}
          onChange={(e) => setTeamCaptain(e.target.value)}
        >
          <option value="">Select Captain</option>
          {team.selectedPlayers.map((player, index) => (
            <option key={index} value={player.name}>{player.name}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleUpdateTeam}>Confirm</button>
    </div>
  );
};

export default UpdateTeam;
