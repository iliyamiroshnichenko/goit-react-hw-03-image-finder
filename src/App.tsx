import { useState, useEffect } from 'react';
import searchImgApi from './services/searchImg-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

interface IImage {
  id: string | number;
  webformatURL: string;
  largeImageURL: string;
  [n: string]: any;
}

function App() {
  const [images, setImages] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [largeImgUrl, setLargeImgUrl] = useState<string>('');

  useEffect(() => {
    if (!searchQuery) return;
    fetchArticles();
    // eslint-disable-next-line
  }, [searchQuery]);

  const onChangeQuery = (query: string) => {
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
    setError(null);
  };

  const fetchArticles = () => {
    const options = { currentPage, searchQuery };
    setIsLoading(true);

    searchImgApi
      .fetchImages(options)
      .then(hits => {
        const imgData = hits.map(
          ({ id, webformatURL, largeImageURL }: IImage) => ({
            id,
            webformatURL,
            largeImageURL,
          }),
        );
        setImages(prState => [...prState, ...imgData]);
        setCurrentPage(prState => prState + 1);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const openModal = (data: string) => {
    setLargeImgUrl(data);
  };

  const closeModal = () => {
    setLargeImgUrl('');
  };

  const shouldRenderLoadMoreBtn = images.length > 0 && !isLoading;

  return (
    <div className="App">
      <Searchbar onSubmit={onChangeQuery} />
      {error && <h2>Ой, ошибка, все пропало (((</h2>}
      <ImageGallery images={images} onClick={openModal} />
      {isLoading && <Loader />}
      {shouldRenderLoadMoreBtn && <Button onClick={fetchArticles} />}
      {largeImgUrl && (
        <Modal onClose={closeModal}>
          <img src={largeImgUrl} alt="Большое изображение" />
        </Modal>
      )}
    </div>
  );
}

export default App;
