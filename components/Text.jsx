import React from "react"
import Draggable from "react-draggable"
export default function Text(props){
return (
    <Draggable>
    <textarea type="text" key={props.id} className="drag"></textarea>
    </Draggable>
)
}