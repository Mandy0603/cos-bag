import React from "react";
import { connect } from "react-redux";
import Checkbox from "./Checkbox";

class FilterCollapse extends React.Component {
  componentDidMount() {
    switch (this.props.filterType) {
      case "brands":
        this.selectedCheckboxes = new Set(this.props.brands);
        break;
      case "tags":
        this.selectedCheckboxes = new Set(this.props.tags);
        break;
      case "category":
        this.selectedCheckboxes = new Set(this.props.category);
        break;
      default:
        this.selectedCheckboxes = new Set();
        break;
    }
    console.log(this.props.filterType);
    console.log(this.selectedCheckboxes);
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
        defaultValue={this.defaultCheckboxValue}
        filterType={this.props.filterType}
      />
    );
  };

  createCheckBoxes = () => this.props.filterItems.map(this.createCheckBox);

  render() {
    return <div className="filters__container">{this.createCheckBoxes()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    brands: state.filter.brands,
    tags: state.filter.tags,
    category: state.filter.category
  };
};
export default connect(mapStateToProps)(FilterCollapse);
