import './App.css'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoContext'

function App() {

  return (
   <TodoProvider>
      <TodoAdd/>
      <TodoList/>
   </TodoProvider>
  )
}

export default App
