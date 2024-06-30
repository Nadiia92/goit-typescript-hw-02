/** @format */

import {useState, useEffect} from "react";
import toast, {Toaster} from "react-hot-toast";
import {getArticles} from "../../api-unsplash";
import {Image} from "../../components/App/App.types";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Modal from "react-modal";

import style from "./App.module.css";

Modal.setAppElement("#root");

function App() {
  const [articles, setArticles] = useState<Image[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasLoadMore, setHasLoadMore] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImageData, setSelectedImageData] = useState<Image | null>(
    null
  );

  useEffect(() => {
    if (!query) return;

    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(false);
        const fetchedArticles = await getArticles(query, page);
        setArticles((prevArticles) =>
          page === 1 ? fetchedArticles : [...prevArticles, ...fetchedArticles]
        );
        setHasLoadMore(fetchedArticles.length > 0);
        if (page === 1 && fetchedArticles.length === 0) {
          toast.error("No results found for your search query.");
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [query, page]);

  const handleSearch = (topic: string) => {
    if (!topic) {
      toast.error("Please enter a search query!");
      setArticles([]);
      setHasLoadMore(false);
      return;
    }
    setQuery(topic);
    setPage(1);
    setHasLoadMore(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageData: Image) => {
    setSelectedImageData(imageData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className={style.container}>
        <SearchBar onSearch={handleSearch} />
        {isLoading && <Loader />}
        <ErrorMessage showError={error} />
        {articles.length > 0 && (
          <ImageGallery items={articles} onImageClick={openModal} />
        )}
        {hasLoadMore && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      </div>
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageData={selectedImageData}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
