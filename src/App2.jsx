import React, { useMemo, useState } from "react";

function App2() {
  const [vat, setVal] = useState(0);
  const callmemoFunc = useMemo(
    (a, b) => {
      return new Promise((res) => setTimeout(() => res(vat), 5000));
    },
    [vat]
  );
  const getMemo = () => {
    console.log(callmemoFunc.then((res) => console.log(res)));
  };
  return (
    <div>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getMemo();
          }}
        >
          call memo
        </button>
        <div>{vat}</div>
      </div>
    </div>
  );
}

export default App2;
