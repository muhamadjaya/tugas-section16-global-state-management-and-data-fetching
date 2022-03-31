import React from "react";
import Addtodo from "./addtodo";
import Todo from "./todo";
import { useSelector } from "react-redux";

const Todolist = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      <div className="container">
        <h1 className="text-center textHeader">todos</h1>
        <table className="table">
          <tbody>
            <tr>
              <td colSpan="4" className="text-center">
                <Addtodo />
              </td>
            </tr>
            {todos.map((todo, index) => (
              <tr key={todo.id}>
                <Todo todo={todo} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todolist;
