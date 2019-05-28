import React from "react";
import FilterCollapse from "../FilterCollapse";
import { connect } from "react-redux";
import { updateCategoryFilters } from "../../../services/Filters/actions";

const category = {
  blush: ["Powder", "Cream"],
  bronzer: ["Powder"],
  eyebrow: ["Pencil"],
  eyeliner: ["Liquid", "Pencil", "Gel", "Cream"],
  eyeshadow: ["Palette", "Pencil", "Cream"],
  foundation: [
    "Liquid",
    "Contour",
    "Bb cc",
    "Concealer",
    "Cream",
    "Mineral",
    "Powder",
    "Highlighter"
  ],
  lipliner: ["Pencil"],
  lipstick: ["Lipstick", "Lip Gloss", "Liquid", "Lip Stain"],
  mascara: [""],
  nailpolish: [""]
};

class CategoryCollapse extends React.Component {
  render() {
    return (
      <FilterCollapse
        filterItems={category[this.props.category]}
        updateFilter={this.props.updateCategoryFilters}
      />
    );
  }
}

export default connect(
  null,
  { updateCategoryFilters }
)(CategoryCollapse);
