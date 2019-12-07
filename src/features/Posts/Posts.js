import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActions from './actions';
import * as commentsActions from '../Comments/actions';
import Post from './Post';
import './Posts.css';


const Posts = ({ actions, allPosts, users }) => {
  useEffect(() => {
    actions.getPosts();
  }, []); // useEffect() здесь работает как componentDidMount();

  const viewAllPosts = allPosts.map(item => {
    const { id: postNumber, title, body, userId } = item;
    const userName = users.length && users.find(user => userId === user.id).name;
    return (
      <Post
        key={postNumber}
        userName={userName}
        postNumber={postNumber}
        title={title}
        body={body}
        getCommentByPostId={actions.getCommentByPostId} />
    );
  });

  return (
    <div>
      <div className="list-group">
        {viewAllPosts}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allPosts: state.posts.allPosts,
    users: state.users.allUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = {
    //getPosts: postActions.getPosts,

    ...postActions,
    ...commentsActions,
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Posts);