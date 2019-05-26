import React from "react";

class Checkbox extends React.Component {
  state = { isChecked: false };
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

export default Checkbox;
