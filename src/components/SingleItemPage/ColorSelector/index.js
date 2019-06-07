import React from "react";
import "./style.scss";

class ColorSelector extends React.Component {
  renderOptions = colors => {
    return colors.map(color => {
      return <option value={color.colour_name}>{color.colour_name}</option>;
    });
  };
  render() {
    return (
      <div className="color-selector">
        <div className="color-selector__title">Select Color:</div>
        <div className="color-selector__content">
          <select
            onChange={event => this.props.onSelectionChange(event.target.value)}
          >
            <option />
            {this.renderOptions(this.props.colors)}
          </select>
        </div>
      </div>
    );
  }
}

export default ColorSelector;
