import React, { useState } from "react";
import BLForm from "./BLForm";
// import { RiCloseCircleLine } from "react-icons/ri";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import { TiEdit } from "react-icons/ti";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

const BLComponent = ({ updateTodo, todos, completeTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <BLForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <HighlightOffIcon
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <AutoFixNormalIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default BLComponent;
