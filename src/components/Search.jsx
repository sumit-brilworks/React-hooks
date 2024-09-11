import React, { useCallback, useState } from "react";
import { shuffle } from "../utils/shuffle";
import SearchBar from "./SearchBar";
const allUsers = ["sumit", "kunal", "vivek", "hit", "nayan"];
function Search() {
  let [arr, setArr] = useState(allUsers);

  // It depends on the dependency array only
  const handleSearch = useCallback(
    (text) => {
      const filteredUsers = allUsers.filter((item) => {
        return item.includes(text);
      });
      setArr(filteredUsers);
    },
    [arr]
  );

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />

      <button
        onClick={() => {
          setArr(shuffle(arr));
        }}
      >
        Shuffle
      </button>
      {console.log(arr)}
      {arr.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}

export default Search;
