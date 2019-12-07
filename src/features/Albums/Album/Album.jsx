import React from 'react';

import './Album.css';


const Album = ({ albumNumber, userId, title }) => {
  return (
    <div className="list-group-item d-flex" key={albumNumber}>
      <div className="list-group-item__album-number">
        Album №:{albumNumber}
      </div>
      <div className="list-group-item__album-autor">
        Name: {userId}
      </div>
      <div className="list-group-item__album-title">
        Title: {title}
      </div>
      <div className="list-group-item">
        photo
      </div>
    </div>
  );
};

export default Album;