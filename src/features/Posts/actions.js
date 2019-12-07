import ApiConfig from '../../API/api-config';


const apiConfig = new ApiConfig();

const getPosts = (id) => {
  return async (dispatch) => {
    const res = await apiConfig.getPosts(id);
    dispatch({ type: 'GET_ALL_POSTS', payload: res });
  }
};

const getPostsByUserId = (userId) => {
  return async (dispatch) => {
    const res = await apiConfig.getPostsByUserId(userId);
    dispatch({ type: 'GET_USERS_POSTS', payload: res });
  }
}

export { getPosts, getPostsByUserId };