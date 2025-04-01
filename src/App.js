import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import Tasks from './myComponents/Tasks';
import AddTask from './myComponents/AddTask';
import { useState } from 'react';


function App() {
  const [TempTasks, setTask] = useState([])

  function onDelete(task) {
    setTask(TempTasks.filter((e) => e !== task))
  }

  function add(data) {
    const task = {
      id: TempTasks.length + 1,
      title: data.title,
      desc: data.desc
    }
    setTask([...TempTasks, task])
    console.log(TempTasks)
  }
  return (
    <>
      <Header title="Task Management" />
      <AddTask add={add} />
      <Tasks TempTask={TempTasks} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
