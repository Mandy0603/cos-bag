import React from "react";
import FilterCollapse from "../FilterCollapse";
import { connect } from "react-redux";
import { updateBrandFilters } from "../../../services/Filters/actions";

const brand = [
  "almay",
  "alva",
  "anna sui",
  "annabelle",
  "benefit",
  "boosh",
  "burt's bees",
  "butter london",
  "cargo cosmetics",
  "china glaze",
  "coastal classic creation",
  "colourpop",
  "covergirl",
  "dalish",
  "dior",
  "dr. hauschka",
  "e.l.f.",
  "essie",
  "fenty",
  "green people",
  "l'oreal",
  "lotus cosmetics usa",
  "maia's mineral galaxy",
  "marcelle",
  "marienatie",
  "maybelline",
  "milani",
  "mineral fusion",
  "misa",
  "mistura",
  "moov",
  "nudus",
  "nyx",
  "orly",
  "pacifica",
  "penny lane organics",
  "physicians formula",
  "piggy paint",
  "pure anada",
  "rejuva minerals",
  "revlon",
  "sally b's skin yummies",
  "salon perfect",
  "sante",
  "sinful colours",
  "smashbox",
  "stila",
  "suncoat",
  "w3llpeople",
  "wet n wild",
  "zorah",
  "zorah biocosmetiques"
];

class BrandCollapse extends React.Component {
  render() {
    return (
      <FilterCollapse
        filterItems={brand}
        filterType="brands"
        updateFilter={this.props.updateBrandFilters}
      />
    );
  }
}

export default connect(
  null,
  { updateBrandFilters }
)(BrandCollapse);
