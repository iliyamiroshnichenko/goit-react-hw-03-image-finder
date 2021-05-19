// import PropTypes from 'prop-types';

interface IImage {
  webformatURL: string;
  largeImageURL: string;
  onClick: (data: string) => void;
}

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }: IImage) => {
  const handleClick = () => {
    onClick(largeImageURL);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={handleClick}
        src={webformatURL}
        alt="something went wrong"
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default ImageGalleryItem;
