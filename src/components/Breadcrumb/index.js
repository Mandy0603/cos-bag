import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./style.scss";

const ProductBreadcrumb = ({ category, subcategory }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">{category}</Breadcrumb.Item>
      <Breadcrumb.Item active>{subcategory}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default ProductBreadcrumb;
