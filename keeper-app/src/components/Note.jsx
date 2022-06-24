import React from "react";

function Note(props) {
    console.log(props.checkModify);
    return <div id="Note">
        <h1 onClick={() => { props.onModified() }} contentEditable={props.check}>{props.title === "" ? "None" : props.title}</h1>
        <p onClick={() => { props.onModified() }} contentEditable={props.check}>{props.content}</p>
        <button onClick={() => { props.onDeleted(props.id) }}>DELETE</button>
    </div>
};
export default Note;