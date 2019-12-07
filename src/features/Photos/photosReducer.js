
const initialState = {
  allPhotos: [],
};

const photosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ALBUM_PHOTOS':
      return {
        ...state,
        allPhotos: action.payload,
      };
       
      default:
        return state;
  }
};

export default photosReducer;