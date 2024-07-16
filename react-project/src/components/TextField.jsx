import { forwardRef, useEffect, useState } from "react";

const TextField = (props, ref) => {
  //   const [err, setError] = useState("");

  //   const onchange = (err) => {
  //     setValue(err);
  //     console.log(err);
  //   };
  console.log(props);
  {
    useEffect(() => {
      return () => {
        console.log("cleanup");
      };
    }, [props.err]);

    return (
      <span>
        <label htmlFor="uname">{props.label}</label>
        <input
          ref={ref}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          name={props.name}
          id="uname"
          placeholder={props.label}
          style={props.err ? { border: "1px solid red" } : {}}
        />

        {/*<!-- Make the input field and utton to a seperate component-->*/}
      </span>
    );
  }
};

export default forwardRef(TextField);
