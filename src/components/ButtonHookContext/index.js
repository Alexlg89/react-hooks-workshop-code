import React, { useState, useEffect, useContext } from "react";
import { SomeContext } from "../../helper";

const ButtonHookContext = props => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const context = useContext(SomeContext);

  useEffect(() => {
    // Component did mount / update
    console.log("HOOKS: I just mounted!");

    context.actions.myHolyFunction("HOOKS");

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
    console.log("HOOKS: color changed", context.state.color);
  }, [context.state.color]);

  return (
    <button
      style={{ backgroundColor: context.state.color }}
      onClick={() => setCount(count + 1)}
    >
      H: {count}
    </button>
  );
};

export default ButtonHookContext;
