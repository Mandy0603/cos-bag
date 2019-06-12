import React from "react";
import history from "../../../services/history";

class AdminButtons extends React.Component {
  render() {
    const { product_link, product_type, nameModified, id } = this.props;

    return (
      <div className="product__purchase">
        <button
          onClick={() => {
            this.onPurchaseClick(product_link);
          }}
          className="product__purchase-buy"
        >
          Buy Now
        </button>
        <button
          onClick={() => {
            history.push(`/view/${product_type}/${nameModified}/${id}`);
          }}
          className="product__purchase-viewDetails"
        >
          View Details
        </button>
      </div>
    );
  }
}

export default AdminButtons;
