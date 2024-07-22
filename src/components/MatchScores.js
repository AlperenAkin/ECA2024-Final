import React, { useState, useEffect } from 'react';
import './MatchScores.css';
import matchdata from '../data/matches';
import { db } from '../firebase';
import { collection, addDoc, query, getDocs, orderBy } from 'firebase/firestore';
import { useAuth } from '../AuthContext';
import { Collapse } from 'react-bootstrap';

const MatchScores = () => {
  const { currentUser } = useAuth();
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(null);
  const [openComments, setOpenComments] = useState({});
  const [fetchError, setFetchError] = useState(false);
  

  const matches = matchdata;

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    const fetchComments = async () => {
      try {
        const commentsCollectionRef = collection(db, 'comments');
        const commentsQuery = query(commentsCollectionRef, orderBy('timestamp', 'asc'));
        const querySnapshot = await getDocs(commentsQuery);

        const commentsData = {};
        for (const docSnapshot of querySnapshot.docs) {
          const data = docSnapshot.data();
          const matchIndex = data.matchIndex;
          if (!commentsData[matchIndex]) {
            commentsData[matchIndex] = [];
          }
          commentsData[matchIndex].push(data);
        }

        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments: ", error);
        setFetchError(true);
      }
    };

    fetchComments();
  }, []);

  const handleAddComment = async (matchIndex) => {
    if (!currentUser || newComment.trim() === '') return;

    const commentData = {
      matchIndex,
      text: newComment,
      userId: currentUser.uid,
      timestamp: new Date()
    };

    await addDoc(collection(db, 'comments'), commentData);

    setComments(prevComments => ({
      ...prevComments,
      [matchIndex]: [...(prevComments[matchIndex] || []), commentData]
    }));
    setNewComment('');
  };

  const toggleComments = (matchIndex) => {
    setOpenComments(prevOpenComments => ({
      ...prevOpenComments,
      [matchIndex]: !prevOpenComments[matchIndex]
    }));
  };

  const renderMatches = () => {
    return matches.map((match, index) => (
      <div id={index} className="card my-4">
        <div className="card-body">
          <h5>{match.date}</h5>
          <div className="row">
            <div className="col-md-5 text-center">
              <br /><br /><br /><br /><br />
              <h1>{match.teams[0].name} {match.teams[0].flag}</h1> <br />
              <h3> VS. </h3> <br />
              <h1>{match.teams[1].name} {match.teams[1].flag}</h1> <br />
              <h2>Score: <b>{match.score}</b></h2>
              
            </div>
            <div className="col-md-7 video-holder">
              <h4>Match Highlights</h4>
              <div className="video-placeholder">
                <iframe
                  width="100%"
                  height="200px"
                  src={match.highlights}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              
            </div>
          </div>
          <div className="comments-section">
            <h5>Comments ({comments[index] ? comments[index].length : 0})</h5>
            <button
              className="btn btn-link"
              onClick={() => toggleComments(index)}
              aria-controls={`comments-collapse-${index}`}
              aria-expanded={openComments[index]}
            >
              {openComments[index] ? 'Hide Comments' : 'Show Comments'}
            </button>
            <Collapse in={openComments[index]}>
              <div id={`comments-collapse-${index}`}>
                {fetchError ? (
                  <p>Failed to load comments.</p>
                ) : (
                  comments[index] && comments[index].map((comment, commentIndex) => (
                    <p key={commentIndex} className="comment">{comment.text}</p>
                  ))
                )}
              </div>
            </Collapse>
            {currentUser ? (
              <>
                <input
                  type="text"
                  value={currentMatchIndex === index ? newComment : ''}
                  onChange={(e) => {
                    setNewComment(e.target.value);
                    setCurrentMatchIndex(index);
                  }}
                  placeholder="Add a comment"
                  className="comment-input"
                />
                <button onClick={() => handleAddComment(index)} className="btn btn-primary mt-2">Add Comment</button>
              </>
            ) : (
              <p>You must be logged in to post a comment.</p>
            )}
            <a href="#top-of-matches">^Return to Match Highlights Navbar^</a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container py-5">
      <h1 id="top-of-matches">Match Scores/Highlights</h1>
      <div className="tournament-round-container">
        <a href="#0" class="btn btn-warning mb-4">GROUP STAGE ROUND 1</a>
        <a href="#12" class="btn btn-warning mb-4">GROUP STAGE ROUND 2</a>
        <a href="#26" class="btn btn-warning mb-4">GROUP STAGE ROUND 3</a>
        <a href="#38" class="btn btn-warning mb-4">ROUND OF 16</a>
        <a href="#46" class="btn btn-warning mb-4">QUARTER FINALS</a>
        <a href="#50" class="btn btn-warning mb-4">SEMI FINALS</a>
        <a href="#52" class="btn btn-warning mb-4">FINAL</a>
      </div>
      {renderMatches()}
    </div>
  );
};

export default MatchScores;
