import React from "react";

function Note(props) {
    return <div id="Note">
        <h1>Title: {props.title === "" ? "None" : props.title}</h1>
        {/*<p>{props.id}</p>*/}
        <p>{props.content}</p>
        <button onClick={() => { props.onChecked(props.id) }}>DELETE</button>
    </div>
};

export default Note;