import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import Comment from './comment';


const Comments = ({ actions, comments, postNumber }) => {

  const viewComments = comments[postNumber] ? comments[postNumber].map(item => {
    const {id, postId: postNumber, name: userName, email: usersEmail, body: text} = item;
    
    return (
        <Comment key={id} postNumber={postNumber} userName={userName} usersEmail={usersEmail} text={text} />
    );
  }) : [];

  return (
    <div className="list-group">
      { viewComments }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Comments);

