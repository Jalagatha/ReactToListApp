export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    
    <li className="bg-sky-400 hover:bg-sky-500 text-white">
      <label >
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
 
  )
}