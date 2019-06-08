import React from "react";

class FilterButton extends React.Component {
  state = { collapseShow: false };

  toggleCollapse = () => {
    this.setState(({ collapseShow }) => ({ collapseShow: !collapseShow }));
  };

  renderArrow = () => {
    if (this.state.collapseShow) {
      return <i className="caret up icon" />;
    } else {
      return <i className="caret down icon" />;
    }
  };

  render() {
    return (
      <div
        onMouseLeave={() => {
          this.setState({ collapseShow: false });
        }}
        className="filterBy"
      >
        <button onClick={this.toggleCollapse} className="btn-dropdown">
          <div className="btn-dropdown__title">
            {this.props.filter}
            <span>{this.renderArrow()}</span>
          </div>
        </button>
        {!!this.state.collapseShow && this.props.collapseComponent}
      </div>
    );
  }
}

export default FilterButton;
