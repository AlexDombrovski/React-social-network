import React from 'react';


const UserIdPost = ({ name, title, body, getPostsByUserId}) => {
  return (
    <div className="list-group-item d-flex">
      <div className="list-group-item__name">
        Name: { name }
      </div>
      <div className="list-group-item__name">
        Title: { title }
      </div>
      <div className="list-group-item__name">
        Text: { body }
      </div>
    </div>
  );
};

export default UserIdPost;