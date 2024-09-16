import { useEffect, useInsertionEffect, useLayoutEffect } from "react";

function App2() {
  useLayoutEffect(() => {
    console.log("useLayoutEffect is running ");
  });
  useEffect(() => {
    console.log("UseEffect is running ");
  });
  useInsertionEffect(() => {
    console.log("useInsertionEffect is running ");
  });
  return <div>Hello world</div>;
}

export default App2;
