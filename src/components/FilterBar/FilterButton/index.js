import React from "react";

class FilterButton extends React.Component {
  state = { collapseShow: false };

  toggleCollapse = () => {
    this.setState(({ collapseShow }) => ({ collapseShow: !collapseShow }));
  };

  renderArrow = () => {
    if (this.state.collapseShow) {
      return <i class="caret up icon" />;
    } else {
      return <i class="caret down icon" />;
    }
  };

  render() {
    return (
      <div className="brand-filter">
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