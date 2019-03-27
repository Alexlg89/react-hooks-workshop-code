import React, { useState, useEffect } from "react";
import { useLocalStorageState } from "../../helper";

const ButtonHook = props => {
  const initialCount = 0;
  //const [count, setCount] = useState(initialCount);
  const [count, setCount] = useLocalStorageState("da-button", initialCount);

  useEffect(() => {
    // Component did mount
    console.log("HOOKS: I just mounted!");

    // Component will unmount
    return () => console.log("HOOKS: I am unmounting");
  }, []);

  // ComponentDidUpdate count
  useEffect(() => {
    if (count > initialCount) {
      console.log("HOOKS: count changed", count);
    }
  }, [count]);

  // ComponentUpdate props.color
  useEffect(() => {
    console.log("HOOKS: color changed", props.color);
  }, [props.color]);

  return (
    <button
      style={{ backgroundColor: props.color }}
      onClick={() => setCount(count + 1)}
    >
      H: {count}
    </button>
  );
};

export default ButtonHook;
