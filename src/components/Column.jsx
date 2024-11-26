import React from 'react'
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import Task from './Tasks/Task'

const Column = ({ tasks }) => {
    return (
        <div className="column">
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((task) => (
                    <Task className="task" id={task.id} title={task.title} key={task.id} />
                ))}
            </SortableContext>
        </div>
    )
}

export default Column