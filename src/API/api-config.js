
export default class ApiConfig {
  
  constructor() {
    this._baseApi = 'https://jsonplaceholder.typicode.com';
  }

  getAllUsers = async () => {
    const urlAdressUsers = `${this._baseApi}/users`;
    const res = await fetch(urlAdressUsers);
    const body = await res.json();
    return body;
  }

  getPosts = async (id) => {
    const urlAdressPosts = `${this._baseApi}/posts${id ? '?userId=' + id : ''}`;
    const res = await fetch(urlAdressPosts);
    const body = await res.json();
    return body;
  }

  getCommentByPostId = async (postId) => {
    const urlAdressComments = `${this._baseApi}/comments${postId ? '?postId=' + postId : ''}`;
    const res = await fetch(urlAdressComments);
    const body = await res.json();
    return body;
  }

  getPostsByUserId = async (userId) => {
    const urlAdressPosts = `${this._baseApi}/posts${userId ? '?userId=' + userId : ''}`;
    const res = await fetch(urlAdressPosts);
    const body = await res.json();
    return body;
  }

  getAlbums = async () => {
    const urlAdressAlbums = `${this._baseApi}/albums`;
    const res = await fetch(urlAdressAlbums);
    const body = await res.json();
    return body;
  }

  getPhotos = async (id) => {
    const urlAdressPhotos = `${this._baseApi}/photos${id ? '?albumId=' + id : ''}`;
    const res = await fetch(urlAdressPhotos);
    const body = await res.json();
    return body;
  }
}