import React from 'react'
import { FaTimes } from 'react-icons/fa'

function TodoItem(props) {
  const { todoItem, handleCompleted, handleDelete, handleEdited } = props

  return (
    <>
      <li
        className="todoItem"
        onDoubleClick={() => {
          handleEdited(todoItem.id)
        }}
      >
        <div className="todoItem-left">
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={() => {
              handleCompleted(todoItem.id)
            }}
            className="checkBox"
          />
          <div className="todoItemText">
            {todoItem.completed ? (
              <del className="todoItemDel">{todoItem.text}</del>
            ) : (
              todoItem.text
            )}
          </div>
        </div>
        <div className="todoItem-right">
          {/* <FaPen
            onClick={() => {
              handleEdited(todoItem.id)
            }}
            className="btn btnEdit"
          /> */}
          <FaTimes
            onClick={() => {
              handleDelete(todoItem.id)
            }}
            className="btn btnDelete"
          />
        </div>
      </li>
    </>
  )
}

export default TodoItem
