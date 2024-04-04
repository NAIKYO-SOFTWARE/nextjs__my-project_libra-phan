import "../css/todo.css";

interface Todo {
  content: string;
  icon: string;
  background: string;
}

function Todo({ content, icon, background }: Todo) {
  return (
    <>
      <div className="div" style={{ backgroundColor: background }}>
        <div className="div-2">
          <div className="div-3">{icon}</div>
          <div className="div-4">{content}</div>
        </div>
      </div>
    </>
  );
}

export default Todo;
