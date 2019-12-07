import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as albumsActions from './actions';
import * as usersActions from '../Users/actions';

import './Albums.css';


const Albums = ({ actions, allAlbums, allUsers }) => {
  useEffect(() => {
    actions.getAllAlbums();
    if (!allUsers.length) { actions.getAllUsers() };
  }, []); // useEffect() здесь работает как componentDidMount();

  const viewName = (id) => allUsers.find(user => user.id === id).name;

  const viewAllAlbums = allAlbums.map(item => {
    const { id: albumNumber, userId, title } = item;
    return (
      <div className="list-group-item d-flex" key={albumNumber}>
        <div className="list-group-item__album-number">
          Album №:{albumNumber}
        </div>
        <div className="list-group-item__album-autor">
          Name: {viewName(userId)}
        </div>
        <div className="list-group-item__album-title">
          Title: {title}
        </div>
        <Link to={`/albums/${albumNumber}`} className="list-group-item__comments">
          show album
        </Link>
      </div>
    );
  });

  return (
    <div className="albums-wrapper">
      {viewAllAlbums}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allAlbums: state.albums.allAlbums,
    allUsers: state.users.allUsers, 
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = {
    ...albumsActions,
    ...usersActions,
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Albums);