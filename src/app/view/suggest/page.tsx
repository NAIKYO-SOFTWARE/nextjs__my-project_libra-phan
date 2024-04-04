"use client";

import Todo from "@/app/component/Todo";
import "../../css/suggest.css";

function Suggest() {
  let handleAddTodo = (todo: Todo) => {
    alert("Add to to-do list successfully!");
  };

  let suggestList: Todo[] = [
    { content: "Read", icon: "📖", background: "#FFEE93" },
    { content: "Study", icon: "✏️", background: "#ADF7B6" },
    { content: "Running", icon: "🏃‍️", background: "#FFC09F" },
    { content: "Cycling", icon: "🚴‍", background: "#BDE0FE" },
  ];

  return (
    <div className="suggest_container">
      <h2 id="suggest_title">Suggestions</h2>
      {suggestList.map((todo, idx) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }} key={idx}>
            <Todo
              content={todo.content}
              icon={todo.icon}
              background={todo.background}
            ></Todo>
            <button
              className="addButton"
              onClick={() => {
                handleAddTodo(todo);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Suggest;
