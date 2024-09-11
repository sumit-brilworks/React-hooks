import Parent from "./components/Parent";
import Search from "./components/Search";
import { Profiler } from "react";
function App() {
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    console.log(
      "onRender function",
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime
    );
  }
  return (
    <>
      <div>Hello world</div>

      <Profiler id="Main" onRender={onRender}>
        <Parent>
          <Parent />
          <div>Hello world</div>
        </Parent>
      </Profiler>
    </>
  );
}

export default App;
