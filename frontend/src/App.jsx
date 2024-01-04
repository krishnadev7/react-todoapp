import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <CreateTodo/>
      <Todos todos={[
        {
          title: "title 1",
          description: "description 1",
          completed: false
        },{
          title: "title 2",
          description: "description 2",
          completed: true
        }
      ]}/>
     </div>
    </>
  )
}

export default App
