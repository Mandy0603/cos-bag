import React from "react";
import SelectBox from "../SelectBox";

import { connect } from "react-redux";
import { updateSort } from "../../../services/Sort/actions";

const sortBy = [
  { value: "", label: "Please Select One" },
  { value: "lowestprice", label: "Price: lowest to highest" },
  { value: "highestprice", label: "Price: highest to lowest" }
];

class SortBy extends React.Component {
  handleSort = value => {
    this.props.updateSort(value);
  };
  render() {
    return (
      <div className="sort__container">
        Sort by:
        <SelectBox options={sortBy} handleOnChange={this.handleSort} />
      </div>
    );
  }
}

export default connect(
  null,
  { updateSort }
)(SortBy);
