import React from 'react'
import { DndContext } from '@dnd-kit/core'
import Draggable from './Draggable.jsx'
import Droppable from './Droppable.jsx'

const Dragtest = () => {
    return (
        <DndContext>
            <Draggable />
            <Droppable />
        </DndContext>
    )
}

export default Dragtest