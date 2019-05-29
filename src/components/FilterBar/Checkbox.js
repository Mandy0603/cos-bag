import React from "react";
import { connect } from "react-redux";

class Checkbox extends React.Component {
  state = { isChecked: null };

  componentDidMount() {
    let checked;
    switch (this.props.filterType) {
      case "brands":
        checked = this.props.brands.find(brand => brand === this.props.label);
        break;
      case "tags":
        checked = this.props.tags.find(tag => tag === this.props.label);
        break;
      case "category":
        checked = this.props.category.find(cat => cat === this.props.label);
        break;

      default:
        this.selectedCheckboxes = new Set();
        break;
    }

    if (!checked) {
      this.setState({ isChecked: false });
    } else {
      this.setState({ isChecked: true });
    }
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;
    this.setState(({ isChecked }) => ({ isChecked: !isChecked }));
    handleCheckboxChange(label);
  };

  render() {
    const { label, className } = this.props;
    const { isChecked } = this.state;
    return (
      <div className={className}>
        <label>
          <input
            type="checkbox"
            value="label"
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          <span className="checkmark">{label}</span>
        </label>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    brands: state.filter.brands,
    tags: state.filter.tags,
    category: state.filter.category
  };
};

export default connect(mapStateToProps)(Checkbox);
