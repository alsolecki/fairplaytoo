import React from 'react'
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots1 } from "react-icons/rx";

const LineItem = ({ item }) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <li className="movie-card" ref={setNodeRef} style={style} {...attributes} >
            <label>{item.title}</label>
            <div className="card-controls">
                <RxDragHandleDots1
                    className="drag-handle"
                    {...listeners}
                />
            </div>
        </li>
    )
}

export default LineItem