import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import ImageModal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // state = {
  //   selectedImage: null,
  // };

  const handleOpenModal = () => {
    setSelectedImage(largeImageURL);
    // this.setState({
    //   selectedImage: this.props.largeImageURL,
    // });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    // this.setState({ selectedImage: null });
  };

 
  // const { selectedImage } = this.state;
  // const { webformatURL, tags } = this.props;
    
  return (
    <li className={css.imageGalleryItem} onClick={handleOpenModal}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
      <ImageModal
        modalClose={handleCloseModal}
        modalOpen={selectedImage !== null}
        image={selectedImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};