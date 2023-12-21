import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  isDone,
  editTodo,
} from "./component/todos/todoSlicer";
import { ThemeContext } from "./App";
export default function Todos() {
  const todoList = useSelector((state) => state.todos);
  const [inpValue, setInpValue] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editValue, setEditValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inpValue.trim() !== "") {
      setInpValue("");
      dispatch(addTodo(inpValue));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleChange = (id) => {
    dispatch(isDone(id));
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo.id);
    setEditValue(todo.title);
  };

  const handleSaveEdit = () => {
    if (editValue.trim() !== "") {
      dispatch(editTodo({ id: editingTodo, newTitle: editValue }));
      setEditingTodo(null);
      setEditValue("");
    }
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
    setEditValue("");
  };
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div className={`main ${theme}`}>
        <h1 className={`${theme}_txt`}>Todo list: {todoList.length}</h1>
        <div className={`${theme}_center center`}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inpValue}
              onChange={(e) => setInpValue(e.target.value)}
            />
            <button>Send</button>
          </form>
          <ul className="ul__list">
            {todoList.map((todo) => (
              <li className="li__item" key={todo.id}>
                <input type="checkbox" onChange={() => handleChange(todo.id)} />
                {editingTodo === todo.id ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                ) : (
                  <b
                    style={{
                      textDecoration: todo.isComplete ? "line-through" : "none",
                    }}
                  >
                    {todo.title}
                  </b>
                )}
                <span>
                  {editingTodo === todo.id ? (
                    <>
                      <button className="btn__green" onClick={handleSaveEdit}>
                        Save
                      </button>
                      <button className="btn__red" onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn__green"
                      onClick={() => handleEdit(todo)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn__red"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}