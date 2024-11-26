import React from 'react'
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import Task from './Tasks/Task'

const ColumnLeft = ({ tasks }) => {
    return (
        <div className="column-left">
            <h2>Lisa</h2>
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((task) => (
                    <Task className="task" id={task.id} title={task.title} key={task.id} />
                ))}
            </SortableContext>
        </div>
    )
}

export default ColumnLeft