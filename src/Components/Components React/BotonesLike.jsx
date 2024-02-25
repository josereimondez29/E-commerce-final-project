import React, { useState, useEffect } from 'react'
import '/workspaces/E-commerce-final-project/src/Styles/BotonesLike.css'

const BotonesLike = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const userVote = localStorage.getItem('userVote');
    if (userVote) {
      setHasVoted(true);
      if (userVote === 'like') {
        setLike(1);
      } else if (userVote === 'dislike') {
        setDislike(1);
      }
    }
  }, []);

  function likeButton() {
    if (!hasVoted) {
      setLike(like + 1);
      setHasVoted(true);
      localStorage.setItem('userVote', 'like');
    }
  }

  function dislikeButton() {
    if (!hasVoted) {
      setDislike(dislike + 1);
      setHasVoted(true);
      localStorage.setItem('userVote', 'dislike');
    }
  }

  return (
    <div>
      <button className='liked' onClick={likeButton}><i className="fa-regular fa-thumbs-up"></i>Liked({like})</button>
      <button className='disliked' onClick={dislikeButton}><i className="fa-regular fa-thumbs-down"></i>Disliked({dislike})</button>
    </div>
  )
}

export default BotonesLike
