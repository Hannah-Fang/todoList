import React, { useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

function TodoItemEditForm(props) {
  const { handleEdited, todoItem, handleEditedSave } = props

  // 可控表單元素，用傳入props中的todoItem.text當初始化的值（初始化的值不會改變）
  const [input, setInput] = useState(todoItem.text)

  return (
    <>
      <li className="todoItem">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          autoFocus
          className="addinput"
        />
        <FaCheck
          onClick={() => {
            // 兩個傳入參數：要修改的項目id、修改的新文字字串
            handleEditedSave(todoItem.id, input)
          }}
        />

        {/* 取消=將狀態切換回去，需要該todoItem的id */}
        <FaTimes
          onClick={() => {
            handleEdited(todoItem.id)
          }}
        />
      </li>
    </>
  )
}

export default TodoItemEditForm
