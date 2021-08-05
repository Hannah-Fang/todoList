import React from 'react'
import { FaCheck } from 'react-icons/fa'

function TodoAddForm(props) {
  const { todoInput, setTodoInput, handleAddNew } = props

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={handleAddNew}
        placeholder="請輸入待辦事項"
        className="addinput"
      />
      {/* <FaCheck onClick={handleAddNew(todoInput)} className="btn btnAdd" /> */}
    </>
  )
}

export default TodoAddForm
