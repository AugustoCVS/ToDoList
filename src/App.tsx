import './css/global.css';
import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { Tasks } from './Components/Tasks/Tasks';

export interface ITask{
  id: number 
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: Math.random(),
      title: "teste",
      isCompleted: true
    },
    {
      id: Math.random(),
      title: "teste2",
      isCompleted: false
    }
  ]);

  function addTask(taskTitle: string){
    setTasks([
      ...tasks,{
        id: Math.random(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(tasksId: number){
    const newTasks = tasks.filter((task) => task.id !==tasksId)
    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTaskById}/>
    </>
  )
}

export default App
