import React, { useReducer } from "react";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const handleChange = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const handleTouchValidation = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        className={`input-styles ${props.className}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={inputState.value}
        onBlur={handleTouchValidation}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows}
        onChange={handleChange}
        value={inputState.value}
        onBlur={handleTouchValidation}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
