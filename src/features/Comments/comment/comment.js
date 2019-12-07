import React from 'react';

import './comment.css';

const Comment = ({ postNumber, userName, usersEmail, text }) => {
  return (
    <div className="list-group-item d-flex">
      <div className="list-group-item__postnumber">
        Comment to Post №: { postNumber }
      </div>
      <div className="list-group-item__username">
        Title: { userName }
      </div>
      <div className="list-group-item__emailadress">
        Email: { usersEmail }
      </div>
      <div className="list-group-item__body">
        { text }
      </div>
    </div>
  );
};

export default Comment;