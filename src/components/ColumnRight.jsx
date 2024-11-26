import React from 'react'
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import Task from './Tasks/Task'

const ColumnRight = ({ tasks }) => {
    return (
        <div className="column-right">
            <h2>Alex</h2>
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((task) => (
                    <Task className="task" id={task.id} title={task.title} key={task.id} />
                ))}
            </SortableContext>
        </div>
    )
}

export default ColumnRight