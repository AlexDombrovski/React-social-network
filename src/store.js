import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from '../src/features/Users/usersReducer';
import postsReducer from '../src/features/Posts/postsReducer';
import commentsReducer from '../src/features/Comments/coomentsReducer';
import albumsReducer from '../src/features/albums/albumsReducer';
import photosReducer from './features/photos/photosReducer';

const devtools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : a => a;
const store = createStore(combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  albums: albumsReducer,
  photos: photosReducer,
}), compose(
  applyMiddleware(thunk),
  devtools)
);


export default store;
