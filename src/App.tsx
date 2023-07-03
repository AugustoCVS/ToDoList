import './css/global.css';
import { useEffect, useState } from 'react';
import { Header } from './Components/Header/Header';
import { Tasks } from './Components/Tasks/Tasks';

const LOCAL_STORAGE_KEY = "todo:savedTasks"

export interface ITask{
  id: number 
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);

  function setTasksAndSave(newTasks: ITask[]){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved){
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  function addTask(taskTitle: string){
    setTasksAndSave([
      ...tasks,{
        id: Math.random(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(tasksId: number){
    const newTasks = tasks.filter((task) => task.id !==tasksId)
    setTasksAndSave(newTasks)
  }

  function toggleTaskCompletedById(taskId: number){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return{
          ...task, 
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasksAndSave(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTaskById} 
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

export default App
