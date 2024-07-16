/* eslint-disable react/prop-types */
const Button = ({ id, text, key, handleSubmit  }) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      id={id}

      // style={{backgroundColor:color,
      //         borderColor:bcolor,

      // }}
    >
      {text}
    </button>
  );
};

export default Button;
