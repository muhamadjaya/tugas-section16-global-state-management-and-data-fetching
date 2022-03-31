import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { submitTodo } from "../store/todolistSlice";
import { v4 as uuidv4 } from "uuid";

const Addtodo = () => {
  const dispatch = useDispatch();

  const [submits, setSubmits] = useState("");

  const handleChange = (e) => {
    setSubmits(e.target.value);
  };

  const clearInput = () => {
    document.getElementById("title").value = "";
    setSubmits({ value: "" });
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        id="title"
        placeholder="Add todo..."
        onChange={handleChange}
      />
      <div className="input-group-append groupAppend">
        <button
          onClick={() => {
            dispatch(
              submitTodo({ id: uuidv4(), title: submits, completed: false })
            );
            clearInput();
          }}
          className="btn btnAdd"
          type="button"
          id="button-addon2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Addtodo;
