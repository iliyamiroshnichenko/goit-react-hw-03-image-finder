import ImageGalleryItem from '../ImageGalleryItem';
// import PropTypes from 'prop-types';

interface IImage {
  id: string | number;
  webformatURL: string;
  largeImageURL: string;
  [n: string]: any;
}

interface IGallery {
  images: IImage[];
  onClick: (data: string) => void;
}

const ImageGallery = ({ images, onClick }: IGallery) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          onClick={onClick}
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };

export default ImageGallery;
