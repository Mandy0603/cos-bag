import React from "react";
import "./style.scss";

class ColorSelector extends React.Component {
  renderOptions = colors => {
    if (colors.length === 0) {
      return <option>Default</option>;
    }
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
            value={this.props.colorSelected}
            onChange={event => this.props.onSelectionChange(event.target.value)}
            className="color-selector__options"
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
