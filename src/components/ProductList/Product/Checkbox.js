import React from "react";
import { connect } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist
} from "../../../services/Wishlist/actions";

class Checkbox extends React.Component {
  state = { isChecked: false };

  toggleCheckboxChange = value => {
    const { product } = this.props;
    this.setState(({ isChecked }) => ({ isChecked: !isChecked }));
    product.quantity = 1;
    if (this.state.isChecked) {
      this.props.removeFromWishlist(product);
    } else {
      this.props.addToWishlist(product);
    }
  };
  renderHeart = () => {
    if (this.state.isChecked) {
      return <i class="heart icon wishlist-heart" />;
    } else {
      return <i class="heart outline icon wishlist-heart" />;
    }
  };
  render() {
    const { isChecked } = this.state;
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
            className="checkbox-hidden"
          />
          {this.renderHeart()}
        </label>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    wishlistProducts: state.wishlist.products
  };
};
export default connect(
  mapStateToProps,
  { addToWishlist, removeFromWishlist }
)(Checkbox);
