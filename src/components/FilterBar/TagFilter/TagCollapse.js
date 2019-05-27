import React from "react";
import FilterCollapse from "../FilterCollapse";
import { connect } from "react-redux";
import { updateTagFilters } from "../../../services/Filters/actions";

const tag = [
  "Canadian",
  "CertClean",
  "Chemical Free",
  "Dairy Free",
  "EWG Verified",
  "EcoCert",
  "Fair Trade",
  "Gluten Free",
  "Hypoallergenic",
  "Natural",
  "No Talc",
  "Non-GMO",
  "Organic",
  "Peanut Free Product",
  "Sugar Free",
  "USDA Organic",
  "Vegan",
  "alcohol free",
  "cruelty free",
  "oil free",
  "purpicks",
  "silicone free",
  "water free"
];

class TagCollapse extends React.Component {
  render() {
    return (
      <FilterCollapse
        filterItems={tag}
        updateFilter={this.props.updateTagFilters}
      />
    );
  }
}

export default connect(
  null,
  { updateTagFilters }
)(TagCollapse);
