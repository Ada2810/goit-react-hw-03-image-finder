import { Component } from "react";
import Searchbar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import "../index.css";

const API_KEY = "26322238-33d706a067034387360fd3b50";
const BASE_URL = "https://pixabay.com/api/";

export class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    selectedImage: null,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    this.setState({ isLoading: true, error: null });

    try {
      const response = await fetch(
        `${BASE_URL}?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();

      if (data.hits.length === 0) {
        alert("No images found!");
        return;
      }

      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: "Something went wrong! Try again." });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = (query) => {
    this.setState({ query, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  openModal = (imageUrl) => {
    this.setState({ showModal: true, selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  render() {
    const { images, isLoading, error, showModal, selectedImage } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        {error && <p className="error">{error}</p>}
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onClick={this.loadMore} />}
        {showModal && <Modal image={selectedImage} onClose={this.closeModal} />}
      </div>
    );
  }
}
