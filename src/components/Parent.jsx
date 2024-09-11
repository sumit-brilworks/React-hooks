import React, { Children } from "react";

export default function Parent({ children }) {
  console.log("Children", children);
  return (
    <div>
      <div>Parent</div>
      <div>Children : {Children.count(children)}</div>
      <div>Children : {Children.count(children)}</div>
    </div>
  );
}
