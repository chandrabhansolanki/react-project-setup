import React from "react"

const InputContainer = (props) => {
  return (
    <div>
      {props?.labelStatus && <label>{props.label}</label>}
      <div>
        <input
          type={props.type}
          onChange={props.onChangeHandler}
          value={props.value}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default InputContainer;
