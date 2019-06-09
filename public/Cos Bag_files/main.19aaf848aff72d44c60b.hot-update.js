webpackHotUpdate("main",{

/***/ "./src/components/FilterResult/index.js":
/*!**********************************************!*\
  !*** ./src/components/FilterResult/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CloseButton */ "./src/components/FilterResult/CloseButton.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/components/FilterResult/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mandyma/Desktop/cos-bag/src/components/FilterResult/index.js";





class FilterResult extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      buttonClicked: false
    };

    this.clickButton = () => {
      this.setState(({
        buttonClicked
      }) => ({
        buttonClicked: !buttonClicked
      }));
    };

    this.calculateItems = () => {
      let pageCount;

      if (!this.props.pages) {
        pageCount = 1;
      } else {
        pageCount = this.props.pages;
      }

      return pageCount * 36 > this.props.products.length ? this.props.products.length : pageCount * 36;
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-result",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-result__number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Showing ", this.calculateItems(), " of ", this.props.products.length, " items"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-result__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, this.props.brands.map(brand => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: brand.toString(),
        className: "filter-result__category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-result__brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, brand), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "brands",
        item: brand,
        clickButton: this.clickButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }), this.props.tags.map(tag => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: tag.toString(),
        className: "filter-result__category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-result__tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, tag), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "tags",
        item: tag,
        clickButton: this.clickButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }));
    }), this.props.category.map(category => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: category.toString(),
        className: "filter-result__category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filter-result__subcategory",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "category",
        item: category,
        clickButton: this.clickButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }));
    })));
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    brands: state.filter.brands,
    tags: state.filter.tags,
    category: state.filter.category,
    products: state.products.products,
    pages: ownProps.pages
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(FilterResult));

/***/ })

})
//# sourceMappingURL=main.19aaf848aff72d44c60b.hot-update.js.map