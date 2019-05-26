import React from "react";
import FilterButton from "../FilterButton";
import TagCollapse from "./TagCollapse";

class TagFilter extends React.Component {
  render() {
    return <FilterButton filter={"Tag"} collapseComponent={<TagCollapse />} />;
  }
}

export default TagFilter;
