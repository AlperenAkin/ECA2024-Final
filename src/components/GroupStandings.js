import React from 'react';
import groupdata from '../data/groups';
import './GroupStandings.css';


const GroupStandings = () => {
  const groups = groupdata;


  return (
    <div className="container py-5">
      <h1>Group Standings</h1>
      {groups.map((group, index) => (
        <div key={index} className="card my-4 group-table">
          <div className="card-header">
            <h2>{group.name}</h2>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Team</th>
                  <th scope="col">Ranking</th>
                  <th scope="col">Qualification Status</th>
                  <th scope="col">GA</th>
                  <th scope="col">GF</th>
                  <th scope="col">GD</th>
                  <th scope="col">Points</th>
                </tr>
              </thead>
              <tbody>
                {group.teams.map((team, idx) => (
                  <tr key={idx}>
                    <td>{team.name}</td>
                    <td>{team.ranking}</td>
                    <td>{team.status}</td>
                    <td>{team.ga}</td>
                    <td>{team.gf}</td>
                    <td>{team.gd}</td>
                    <td>{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupStandings;

