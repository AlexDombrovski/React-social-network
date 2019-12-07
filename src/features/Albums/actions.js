import ApiConfig from '../../API/api-config';

const apiConfig = new ApiConfig();

const getAllAlbums = () => {
  return async (dispatch) => {
    const res = await apiConfig.getAlbums();
    dispatch({ type: 'GET_ALL_ALBUMS', payload: res });
  }
};

const getAllUsers = () => {
  return async (dispatch) => {
    const res = await apiConfig.getAllUsers();
    dispatch({ type: 'GET_ALL_USERS', payload: res });
  }
};

export { getAllAlbums, getAllUsers };