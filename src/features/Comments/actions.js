import ApiConfig from '../../API/api-config';

const apiConfig = new ApiConfig();

const getCommentByPostId = (postId) => {
  return async (dispatch) => {
    const res = await apiConfig.getCommentByPostId(postId);
    dispatch({ type: 'GET_COMMENTS', payload: { res, postId } });
  }
};

export { getCommentByPostId };