
const initialState = {
  allPosts: [],
  usersPost: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS' :
      return {
        ...state,
        allPosts: action.payload,
      };

    case 'GET_USERS_POSTS' :
      return {
        ...state,
        usersPost: action.payload,
      }

      default:
        return state;
  }
};

export default postsReducer;