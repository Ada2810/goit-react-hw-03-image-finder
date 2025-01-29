import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ smallImage, largeImage, onImageClick }) => (
  <li className={css.galleryItem} onClick={() => onImageClick(largeImage)}>
    <img src={smallImage} alt="Thumbnail" className={css.image} />
  </li>
);

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
