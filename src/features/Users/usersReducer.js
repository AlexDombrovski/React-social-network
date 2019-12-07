
const initialState = {
  allUsers: [],
  activeUser: null, 
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return {
        ...state,
        allUsers: action.payload,
      };

    case 'SET_ACTIVE_USER':
      return {
        ...state,
        activeUser: action.payload,
      }
      default:
        return state;
  }
};

export default usersReducer;
