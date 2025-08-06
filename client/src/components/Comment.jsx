import React from 'react';

const Comment = ({ text }) => (
  <div style={{ paddingLeft: '10px', borderLeft: '2px solid #ddd', marginTop: '5px' }}>
    <p>{text}</p>
  </div>
);

export default Comment;
