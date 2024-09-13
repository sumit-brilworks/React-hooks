import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const FormElement = forwardRef((props, ref) => {
  console.log("Props : ", props, "Ref ", ref);
  const inputRef = useRef();
  let [count, setCount] = useState(0);
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      getCount: () => {
        setCount(++count);
        // return count;
      },
    };
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit" onClick={() => setCount(count++)}>
          Submit
        </button>
        {count}
      </form>
    </div>
  );
});
export default FormElement;
