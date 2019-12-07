import React, { useState } from 'react';

import Comments from '../../Comments';
import './Post.css';

const Post = ({ postNumber, title, body, getCommentByPostId, userName }) => {
  const [isOpen, commentsToggle] = useState(false);
  const onClickFunction = () => {
    if (isOpen === false) getCommentByPostId(postNumber);
    commentsToggle(!isOpen);
  };
  return (
    <div className="list-group-item d-flex">
      <div className="list-group-item__postnumber">
        Post №: { postNumber }
      </div>
      <div className="list-group-item__postnumber">
        Name: { userName }
      </div>
      <div className="list-group-item__title">
        Title: { title }
      </div>
      <div className="list-group-item__body">
        { body }
      </div>
      <div className="list-group-item__comments" onClick={onClickFunction}>
        comments
      </div>
      {isOpen && <Comments postNumber={postNumber} />}
    </div>
  );
};

export default Post;