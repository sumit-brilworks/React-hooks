import React, { useReducer } from "react";
const initail = { count: 1 };
function UseReducerExample() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "Increment": {
        return { ...state, count: state.count + 1 };
      }
      case "Decrement": {
        return { ...state, count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  }, initail);
  return (
    <div className="flex flex-col items-center min-h-screen bg-neutral-700 text-white">
      <div>{state.count}</div>
      <div>
        <button
          className="bg-sky-500 p-4 rounded m-2"
          onClick={() => dispatch({ type: "Increment" })}
        >
          Increment
        </button>
        <button
          className="bg-sky-500 p-4 rounded m-2"
          onClick={() => dispatch({ type: "Decrementa" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseReducerExample;
