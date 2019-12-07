
const initialState = {
  comments: {}
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMMENTS':
      const { res, postId } = action.payload;
      return {
        ...state,
        comments: {
          ...state.comments,
          [postId]: res,
        },
      };

      default:
        return state;
  }
};

export default commentsReducer;