import React from "react";

import { useDispatch } from "react-redux";
import { handleDelete, handleComplete } from "../store/todolistSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const checkComplete = () => {
    if (todo.completed)
      return (
        <s>
          <i>{todo.title}</i>
        </s>
      );
    else return todo.title;
  };

  return (
    <>
      <td style={{ width: 15 }} className="text-center">
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => dispatch(handleComplete(todo.id))}
        />
      </td>
      <td>{checkComplete()}</td>
      <td style={{ width: 100 }} className="text-center">
        <button
          onClick={() => dispatch(handleDelete(todo.id))}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default Todo;
