import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ onClick }) => (
  <button className={css.button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
