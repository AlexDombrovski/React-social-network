
const initialState = {
  allAlbums: [],
  allUsers: [],
};

const albumsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ALL_ALBUMS':
      return {
        ...state,
        allAlbums: action.payload,
      };

      case 'GET_ALL_USERS':
      return {
        ...state,
        allUsers: action.payload,
      };
       
      default:
        return state;
  }
};

export default albumsReducer;