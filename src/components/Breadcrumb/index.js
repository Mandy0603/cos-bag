import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./style.scss";

const ProductBreadcrumb = ({ category, subcategory }) => {
  let categoryWithoutSpace = category.replace(" ", "");
  return (
    <Breadcrumb id="bread_crumb">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href={`/shop/${categoryWithoutSpace}/all`}>
        {category}
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{subcategory}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default ProductBreadcrumb;
