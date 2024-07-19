import React, { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import { db } from '../firebase';
import { collection, getDocs, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const { currentUser } = useAuth();
  const [teams, setTeams] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      if (currentUser) {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const teamsCollectionRef = collection(userDocRef, 'teams');
        const teamsSnapshot = await getDocs(teamsCollectionRef);
        const teamsList = teamsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), userId: currentUser.uid }));
        setTeams(teamsList);

        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserDetails(userDoc.data());
        }
      }
    };

    fetchTeams();
  }, [currentUser]);

  const handleDeleteTeam = async (teamId) => {
    if (currentUser) {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const teamDocRef = doc(userDocRef, 'teams', teamId);
      await deleteDoc(teamDocRef);
      setTeams(prevTeams => prevTeams.filter(team => team.id !== teamId));
    }
  };

  const handleUpdateTeam = (team) => {
    navigate('/update-team', { state: { team } });
  };

  const calculateTotalCost = (selectedPlayers) => {
    return selectedPlayers.reduce((total, player) => {
      const playerCost = parseFloat(player.price) * 1000000;
      return total + playerCost;
    }, 0);
  };

  return (
    <div className="container py-5">
      <div className="d-flex flex-row gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill text-primary" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
      <h1 className="text-primary"> My Account</h1>
      </div>
      <br />
      <div className="d-flex flex-row gap-5">
      <p><strong className="text-primary">Name:</strong> {userDetails.firstName} {userDetails.lastName}</p>
      <p><strong className="text-primary">Email:</strong> {currentUser.email}</p>
      </div>
      <br />
      <div className="container text-center">
        <h2>My Teams</h2>
        
        {teams.length > 0 ? (
          <ul>
            {teams.map(team => (
              <li className='mt-5' key={team.id}>
                <h4 className='text-warning'>{team.teamName}</h4>
                <p>Captain: {team.teamCaptain}</p>
                <ul>
                  {team.selectedPlayers.map((player, index) => (
                    <li key={index}>{player.position}: {player.name} ({player.nationality}) - {player.price}</li>
                  ))}
                </ul>
                <br />
                <p>Total Cost: ${(calculateTotalCost(team.selectedPlayers) / 1000000).toLocaleString()}m</p>
                <p># of Players: {team.selectedPlayers.length}</p>
                <button class="btn btn-warning m-2 " onClick={() => handleDeleteTeam(team.id)}>Delete Team</button>
                <button class="btn btn-warning m-2" onClick={() => handleUpdateTeam(team)}>Update Team</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No teams submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
