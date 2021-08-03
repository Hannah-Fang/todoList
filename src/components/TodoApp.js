import React, { useState } from 'react'
import TodoAppForm from './TodoAddForm'
import TodoList from './TodoList'

function TodoApp() {
  const [todoInput, setTodoInput] = useState('')

  // 另一個仿照資料庫的自動遞增的方式來產生id
  // 每次要id值時呼叫increment()
  // const [autoIncrement, setAutoIncrement] = useState(0)

  // const increment = () => {
  //   const newAutoIncrement = autoIncrement + 1
  //   setAutoIncrement(newAutoIncrement)
  //   return newAutoIncrement
  // }

  // 待辨事項每個的物件值
  // todo = {id:number, text:string, completed:bool(default: false), edited: false}
  const [todos, setTodos] = useState([
    { id: 9999999, text: '努力學React', completed: false, edited: false },
    {
      id: 9999977,
      text: '買iPhone或安卓手機',
      completed: false,
      edited: false,
    },
  ])

  // 刪除
  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)

    setTodos(newTodos)
  }

  // 儲存編輯後的內容，傳入兩個參數：項目id與調整後的text
  const handleEditedSave = (id, text) => {
    // (1) 拷貝一個新陣列
    const newTodos = [...todos]

    // (2) 找到對應的索引值
    const index = newTodos.findIndex((item) => item.id === id)

    // (3) 找到的話
    if (index !== -1) {
      // 把該項目的文字屬性改成新的
      newTodos[index].text = text

      // 設定回原本的todos
      setTodos(newTodos)

      // 切換Edited狀態
      handleEdited(id)
    }
  }

  // 切換是否完成項目的狀態
  const handleCompleted = (id) => {
    // 先由目前的todos拷貝出一個陣列
    const newTodos = [...todos]

    // 利用id值找到對應的todo項目的索引值
    const index = newTodos.findIndex((item) => item.id === id)

    // 如果有找到就切換completed的true/false
    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed

      setTodos(newTodos)
    }
  }

  // 切換是否是編輯狀態，邏輯同completed
  const handleEdited = (id) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex((item) => item.id === id)

    if (index !== -1) {
      newTodos[index].edited = !newTodos[index].edited

      setTodos(newTodos)
    }
  }

  // 新增
  const handleAddNew = (e) => {
    if (e.key === 'Enter') {
      // 建立一個todo項目的物件值
      // 用時間物件轉微秒整數當id值
      const newTodoItem = {
        id: +new Date(),
        text: e.target.value,
        completed: false,
      }

      // 文字輸入框的值加到陣列todos
      // 相當於unshift，在陣列前加入新的成員
      const newTodos = [newTodoItem, ...todos]

      // 設定陣列狀態值
      setTodos(newTodos)

      // 清空文字輸入框
      setTodoInput('')
    }
  }

  return (
    <>
      {/* 可控的表單元素，value對應到狀態，onChange對應到設定狀態 */}
      <TodoAppForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        handleAddNew={handleAddNew}
      />
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEdited={handleEdited}
        handleEditedSave={handleEditedSave}
      />
    </>
  )
}

export default TodoApp
