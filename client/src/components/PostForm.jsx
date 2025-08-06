// src/components/PostForm.jsx
import React, { useState } from 'react';
import './PostForm.css';

const PostForm = ({ onPost }) => {
  const [content, setContent] = useState('');
  const [role] = useState('farmer'); // since only farmers can post

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      onPost({ content, role, comments: [] });
      setContent('');
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={content}
        placeholder="What's on your mind?"
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
