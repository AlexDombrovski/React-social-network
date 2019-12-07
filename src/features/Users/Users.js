import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as usersActions from './actions';
import * as postActions from '../Posts/actions';
import './Users.css';

const Users = ({ actions, allUsers, activeUser }) => {
  useEffect(() => {
    actions.getAllUsers();
  }, []); // useEffect() здесь работает как componentDidMount();

  const openPostsByUserId = async (userId) => {
    await actions.getPosts(userId);
    actions.setActiveUser(userId);
  };

  const viewAllUsers = allUsers.map(item => {
    const { name, id } = item;
    return (
      <li
        className={`list-group-item d-flex justify-content-between align-items-center user ${id===activeUser ? 'active' : ''}`}
        key={name} onClick={() => openPostsByUserId(id)}>
        {name}
      </li>
    );
  });

  return (
    <div>
      <ul className="list-group__classname">
        {viewAllUsers}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allUsers: state.users.allUsers,
    activeUser: state.users.activeUser,
  };
};

const mapDispatchToProps = (dispatch) => {

  const actions = {
    ...usersActions,
    ...postActions,
  };

  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);