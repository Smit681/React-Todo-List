import AddTask from "./AddTask"
import Tasks from "./Tasks"
import { useState } from "react"

export default function Home() {
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
    }
    return (
        <>
            <AddTask add={add} />
            <Tasks TempTask={TempTasks} onDelete={onDelete} />
        </>
    )
}

