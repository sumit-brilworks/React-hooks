import React, { memo } from "react";

function List({ list }) {
  console.log(list, "list is updating");
  return <div></div>;
}

export default memo(List);
