import ApiConfig from '../../API/api-config';

const apiConfig = new ApiConfig();

const getPhotos = (id) => {
  return async (dispatch) => {
    const res = await apiConfig.getPhotos(id);
    dispatch({ type: 'GET_ALBUM_PHOTOS', payload: res });
  }
};

export { getPhotos };