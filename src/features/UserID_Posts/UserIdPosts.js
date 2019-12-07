import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActions from '../Posts/actions';
import UserIdPost from '../UserID_Posts/UserID-Post';


const UserIdPosts = ({ actions, usersPost }) => {
  useEffect(() => {
    actions.getPostsByUserId();
  }, []);

  const viewUsersPosts = usersPost.map(item => {
    const { userId: name, title, body } = item;
    return (
      <UserIdPost
        key={name}
        name={name}
        title={title}
        body={body} />
    );
  });

  return (
    <div className="list-group">
      { viewUsersPosts }
    </div>
  );
};


export default UserIdPosts;