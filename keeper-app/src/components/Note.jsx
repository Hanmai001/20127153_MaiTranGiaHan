import React from "react";

function Note(props) {
    return <div id="Note">
        <h1>{props.title}</h1>
        {/*<p>{props.id}</p>*/}
        <p>{props.content}</p>
        <button>DELETE</button>
    </div>
};

export default Note;