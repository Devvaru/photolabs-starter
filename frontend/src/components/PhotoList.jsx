import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = (props) => {

  const { favouritedPhotoID, changeFavourite, openModal, photoData, setPhotoData, PhotoDetailsModal, setDisplayModal } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorited={favouritedPhotoID.includes(photo.id)}
          changeFavourite={changeFavourite}
          openModal={openModal}
          PhotoDetailsModal={PhotoDetailsModal}
          setDisplayModal={setDisplayModal}
          photoData={photoData}
          setPhotoData={setPhotoData}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
