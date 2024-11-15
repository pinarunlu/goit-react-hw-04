import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreButton from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import { toast, Toaster } from 'react-hot-toast';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalImage, setModalImage] = useState(null); // Modal'da gösterilecek resim verisi

  const fetchImages = async (searchQuery, pageNumber = 1) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${pageNumber}&per_page=12`,
        {
          headers: {
            Authorization: `Client-ID Khb53iCydwKjzxLxsPwW7nOTmXGj8CVb3baU7Hh5YSU`,
          },
        }
      );

      if (response.data.results.length === 0) {
        toast.error('No images found. Please try a different search term.');
      } else {
        setImages((prevImages) =>
          pageNumber === 1 ? response.data.results : [...prevImages, ...response.data.results]
        );
        setTotalPages(Math.ceil(response.data.total / 12));
        setError(null);
      }
    } catch (err) {
      console.error('API Error:', err);
      toast.error('An error occurred while fetching images.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery.trim() === '') {
      toast.error('Please enter a search term.');
      return;
    }
    setQuery(searchQuery);
    fetchImages(searchQuery, 1);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      fetchImages(query, page + 1);
    } else {
      toast.info('No more images to load.');
    }
  };

  const closeModal = () => {
    setModalImage(null); // Modal'ı kapatır
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} setModalImage={setModalImage} />}
      {totalPages > 1 && !loading && <LoadMoreButton onClick={handleLoadMore} />}
      <ImageModal isOpen={!!modalImage} onClose={closeModal} imageData={modalImage} />
      <Toaster /> {/* Toast mesajlarını göstermek için */}
    </div>
  );
};

export default App;
