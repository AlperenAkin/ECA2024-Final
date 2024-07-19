import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import GroupStandings from './components/GroupStandings';
import MatchScores from './components/MatchScores';
import TournamentBracket from './components/TournamentBracket';
import FantasyHome from './components/FantasyHome';
import TeamConfirmation from './components/TeamConfirmation';
import SignUp from './components/SignUp';
import Login from './components/Login';
import MyAccount from './components/MyAccount';
import UpdateTeam from './components/UpdateTeam';  // Import the UpdateTeam component
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/group-standings" element={<GroupStandings />} />
            <Route path="/match-scores" element={<MatchScores />} />
            <Route path="/tournament-bracket" element={<TournamentBracket />} />
            <Route 
              path="/fantasy-home" 
              element={
                <PrivateRoute>
                  <FantasyHome />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/team-confirmation" 
              element={
                <PrivateRoute>
                  <TeamConfirmation />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/my-account" 
              element={
                <PrivateRoute>
                  <MyAccount />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/update-team" 
              element={
                <PrivateRoute>
                  <UpdateTeam />
                </PrivateRoute>
              } 
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
