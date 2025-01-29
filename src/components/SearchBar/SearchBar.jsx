import { Component } from "react";
import PropTypes from "prop-types";
import css from "./SearchBar.module.css";

class SearchBar extends Component {
  state = { query: "" };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query.trim() === "") {
      alert("Please enter a search term!");
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search images..."
            required
          />
          <button className={css.button} type="submit">Search</button>
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
