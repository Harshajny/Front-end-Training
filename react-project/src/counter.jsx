import { useEffect, useState, useRef } from "react";
import Button from "./components/Button";
const Counter = ({ clicked, setClicked }) => {
  const [counter, setCounter] = useState(0);
  const refi= useRef(0);
  const ref= useRef();

  const focusInput = () => {
    ref.current.focus();
  };

  //   useEffect(() => {
  //     if (clicked) {
  //       setCounter(counter + 1);
  //       setClicked(false);
  //     }
  //   }, [clicked]);

  useEffect(() => {
    {
      console.log("hi");
    }

    return () => {
      console.log("cleanup");
    };
  }, [counter]);

  //   useEffect(() => {
  //     console.log("hi");
  //   }, []);

  //   useEffect(() => {
  //     console.log("hi");
  //   });

  const increment = () => {
    // setCounter(counter + 1);
    refi.current = refi.current + 1;

    console.log(ref.current);
  };

  const decrement = () => {
    setCounter(counter - 1);
    focusInput();
  };
  return (
    <div>
      <div>{counter}</div>
      <input ref={ref} />
      <Button text="+" handleSubmit={increment} />

      <Button text="-" handleSubmit={decrement} />
    </div>
  );
};

export default Counter;
