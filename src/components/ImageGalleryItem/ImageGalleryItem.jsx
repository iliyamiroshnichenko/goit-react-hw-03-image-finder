import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt="something went wrong"
        className="ImageGalleryItem-image"
        data-url={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
