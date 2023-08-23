import { useState } from "react"


// eslint-disable-next-line react/prop-types
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
   

    
    <form onSubmit={handleSubmit} className="new-item-form">
    {/* <img  src="./src/assets/ts.jpg" alt="" /> */}
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
    
    
  )
}