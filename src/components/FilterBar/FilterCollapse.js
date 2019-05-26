import React from "react";
import Checkbox from "./Checkbox";

class FilterCollapse extends React.Component {
  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }
  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    this.props.updateFilter(Array.from(this.selectedCheckboxes));
  };

  createCheckBox = label => {
    return (
      <Checkbox
        className="filters__checkboxes"
        label={label}
        handleCheckboxChange={this.toggleCheckbox}
        key={label}
      />
    );
  };

  createCheckBoxes = () => this.props.filterItems.map(this.createCheckBox);

  render() {
    return <div className="filters__container">{this.createCheckBoxes()}</div>;
  }
}

export default FilterCollapse;
