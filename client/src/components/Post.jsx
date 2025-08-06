// src/components/Post.jsx
import React, { useState } from 'react';
import './Post.css';

const Post = ({ post }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <strong>{post.role === 'farmer' ? '👨‍🌾 Farmer' : '🏨 Buyer'}</strong>
      </div>
      <p className="post-content">{post.content}</p>

      <div className="comment-section">
        <h4>Comments</h4>
        {comments.length === 0 && <p className="no-comments">No comments yet.</p>}
        <ul>
          {comments.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        <div className="add-comment">
          <input
            type="text"
            value={comment}
            placeholder="Write a comment..."
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
