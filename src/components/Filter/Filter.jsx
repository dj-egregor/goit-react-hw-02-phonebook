import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends React.Component {
  state = {
    filter: '',
  };

  updateFilter = event => {
    this.setState({ filter: event.target.value });
    this.props.onFilter(event.target.value);
  };

  render() {
    return (
      <div className={css.searchWrapper}>
        <label className={css.label} htmlFor="filter">
          Find contacts by name
        </label>
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.updateFilter}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
