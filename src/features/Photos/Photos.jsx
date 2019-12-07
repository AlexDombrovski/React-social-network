import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';

import * as photosActions from './actions';

import './Photos.css';

const Photos = ({ actions, allPhotos }) => {
  let { id } = useParams();
  useEffect(() => {
    actions.getPhotos(id);
  }, []);
  const albumPhotos = allPhotos.map(item => {
    const { albumId, title, thumbnailUrl: adress, id } = item;
    return (
      <div className="list-group-item" key={id}>
        <div className="list-group-item__album-title">
          Title: {title}
        </div>
        <div className="list-group-item">
          <img src={adress} />
        </div>
      </div>
    );
  });

  return (
    <div className="list-group-item album-wrapper">
      <div className="list-group-item__album-number">
        Album №:{id}
      </div>
      {albumPhotos}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allPhotos: state.photos.allPhotos,
  };
};

const mapDispatchToProps = (dispatch) => {

  const actions = {
    ...photosActions,
  };

  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);

