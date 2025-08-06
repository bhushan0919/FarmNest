import React, { useState } from 'react';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import './Community.css';

const Community = ({ isLoggedIn, userRole }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('');

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(search.toLowerCase()) &&
    (filterRole ? post.role === filterRole : true)
  );

  return (
    <div className="community-page">
      <h2>Community Forum</h2>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
          <option value="">All Roles</option>
          <option value="farmer">Farmer</option>
          <option value="buyer">Hotel/Buyer</option>
        </select>
      </div>

      {isLoggedIn && userRole === 'farmer' && (
        <PostForm onPost={handleAddPost} />
      )}

      <div className="post-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Post key={index} post={post} />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Community;
