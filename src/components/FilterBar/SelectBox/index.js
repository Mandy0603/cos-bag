import React from "react";

class SelectBox extends React.Component {
  state = {
    selected: ""
  };

  createOptions = options =>
    options.map(o => (
      <option value={o.value} key={o.value} className="sort__options">
        {o.label}
      </option>
    ));

  onChange = e => {
    this.props.handleOnChange(e.target.value);
  };
  render() {
    const { options } = this.props;

    return (
      <select onChange={e => this.onChange(e)} className="sort__select">
        {this.createOptions(options)}
      </select>
    );
  }
}

export default SelectBox;
