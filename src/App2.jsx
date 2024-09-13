import React, { useEffect, useMemo, useRef, useState } from "react";
import FormElement from "./components/FormElement";
function App2() {
  const ref = useRef();
  console.log(ref.current);
  // console.log(ref.current.getCount());
  let getVar;
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <FormElement ref={ref} hello="hello" />
    </div>
  );
}

export default App2;
