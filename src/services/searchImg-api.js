import axios from 'axios';

const API_KEY = '20192065-3084c849aae1164575ffb5a21';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = ({
  searchQuery = 'nature',
  currentPage = 1,
  perPage = 15,
}) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(({ data: { hits } }) => hits);
};

// eslint-disable-next-line
export default { fetchImages };
