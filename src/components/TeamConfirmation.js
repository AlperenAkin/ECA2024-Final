import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TeamConfirmation = () => {
  const location = useLocation();
  const { teamName, teamCaptain, selectedPlayers } = location.state;

  return (
    <div className="container text-center">
      <br />
      <br /> 
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check-circle text-success" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
      </svg> 
      <h2 class="text-success">Team Submitted Succesfully!</h2>
      <br />
      <p><strong>Team Name:</strong> {teamName}</p>
      <p><strong>Team Captain:</strong> {teamCaptain}</p>
      <h3>Players</h3>
      <ul>
        {Object.entries(selectedPlayers).map(([position, player]) => (
          player.name && <li key={position}>{player.name} ({player.position}) - {player.price}</li>
        ))}
      </ul>
      <br />
      <h4>Head to <Link to="/my-account">My Account</Link>  to view your teams</h4>
      <br />
      <br />
    </div>
  );
};

export default TeamConfirmation;
