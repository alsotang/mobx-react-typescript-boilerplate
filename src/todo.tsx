import * as React from 'react';
import {AppStoreContext} from './store/app'
import { useObserver, useObservable } from 'mobx-react-lite';

const TodoView = (props: {date: string}) => {
  const inputRef = React.useRef(null)
  const appStore = React.useContext(AppStoreContext)
  console.log(`TodoView render`)
  const todoListModel = useObservable({
    todos: [
      {value: 'do sth 1', isDone: false},
      {value: 'do sth 2', isDone: true},
    ],
    setDone(index: number) {
      this.todos[index].isDone = !this.todos[index].isDone
    },
    add() {
      this.todos.push({value: inputRef.current.value, isDone: false})
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  })

  const todoList = todoListModel.todos.map((item, idx) => {
    return (
      <div>
        <input type="checkbox" defaultChecked={item.isDone} onChange={() => todoListModel.setDone(idx)} />
        <span>
          value: {item.value}, isDone: {String(item.isDone)}
        </span>
      </div>
    )
  })

  return useObserver(() =>
    <div>
      <p>username: {appStore.userStore.name}</p>
      <p>date: {props.date}</p>

      <div>
        {todoList}
      </div>
      <div>
        <input type="text" ref={inputRef}
          onKeyPress={event => event.key == 'Enter' && todoListModel.add()} />
        <button onClick={() => todoListModel.add()}>add</button>
        <button onClick={() => appStore.userStore.updateName()}>change user name</button>
      </div>
    </div>
  )
}

export default TodoView