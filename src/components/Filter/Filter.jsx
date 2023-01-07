import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends React.Component {
  updateFilter = event => {
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
          value={this.props.filter}
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
