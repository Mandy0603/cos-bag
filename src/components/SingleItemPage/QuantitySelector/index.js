import React from "react";
import "./style.scss";

class QuantitySelector extends React.Component {
  state = { quantity: 0 };
  minusOne = () => {
    if (this.state.quantity >= 1) {
      this.setState(({ quantity }) => ({ quantity: quantity - 1 }));
    }
  };

  plusOne = () => {
    if (this.state.quantity <= 9) {
      this.setState(({ quantity }) => ({ quantity: quantity + 1 }));
    }
  };

  render() {
    let classNameMinus = null;
    let classNamePlus = null;
    if (this.state.quantity === 0) {
      classNameMinus = "quantitySelector__content-sign-grey";
    } else {
      classNameMinus = "quantitySelector__content-sign";
    }
    if (this.state.quantity === 10) {
      classNamePlus = "quantitySelector__content-sign-grey";
    } else {
      classNamePlus = "quantitySelector__content-sign";
    }

    return (
      <div className="quantitySelector">
        <div className="quantitySelector__title">Quantity:</div>
        <div className="quantitySelector__content">
          <span
            className={classNameMinus}
            onClick={() => {
              this.minusOne();
            }}
          >
            -
          </span>
          <span className="quantitySelector__content-number">
            {this.state.quantity}
          </span>
          <span
            className={classNamePlus}
            onClick={() => {
              this.plusOne();
            }}
          >
            +
          </span>
        </div>
      </div>
    );
  }
}

export default QuantitySelector;
