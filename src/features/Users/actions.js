import ApiConfig from '../../API/api-config';

const apiConfig = new ApiConfig();

const getAllUsers = () => {
  return async (dispatch) => {
    const res = await apiConfig.getAllUsers();
    dispatch({ type: 'GET_ALL_USERS', payload: res });
  }
};

const setActiveUser = (id) => {
  return { type: 'SET_ACTIVE_USER', payload: id };
};

export { getAllUsers, setActiveUser };