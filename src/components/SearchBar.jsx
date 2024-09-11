import React, { memo } from "react";

function SearchBar({ handleSearch }) {
  console.log("Search bar component re-rendering...");
  return (
    <input
      type="search"
      name="search"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}

// React.memo depends on the props if the prop is different then it re-renders otherwise it will not run.

// now why does this re-rendering on shuffling the list because the will always be different we can make a frozen function by using the useCallback function.

// In the callback function as the second parameter in memo return true the fucntion will not be re-rendered otherwise it does
export default memo(SearchBar, (old, newP) => {
  console.log("PRops in memo", old, newP);
  return true;
});
