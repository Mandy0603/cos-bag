import React from "react";
import FilterCollapse from "../FilterCollapse";
import { connect } from "react-redux";
import { updatePriceFilters } from "../../../services/Filters/actions";

const price = ["$0 - 49", "$50 - 99", "$100 - 199", "above $200"];

class PriceCollapse extends React.Component {
  render() {
    return (
      <FilterCollapse
        filterItems={price}
        updateFilter={this.props.updatePriceFilters}
      />
    );
  }
}

export default connect(
  null,
  { updatePriceFilters }
)(PriceCollapse);
