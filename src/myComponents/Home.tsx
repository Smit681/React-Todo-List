import React from "react";
import AddTask from "./AddTask.tsx";
import Tasks from "./Tasks.tsx";
import { useState } from "react";

export default function Home() {
  type TaskType = {
    id: number;
    title: string;
    desc: string;
  };
  const [TempTasks, setTask] = useState<TaskType[]>([]);

  function onDelete(task: { id: number; title: string; desc: string }) {
    setTask(TempTasks.filter((e) => e !== task));
  }

  function add(data: { title: string; desc: string }) {
    const task = {
      id: TempTasks.length + 1,
      title: data.title,
      desc: data.desc,
    };
    setTask([...TempTasks, task]);
  }
  return (
    <>
      <AddTask add={add} />
      <Tasks TempTask={TempTasks} onDelete={onDelete} />
    </>
  );
}
