import React from "react";

function Note(props) {
    return <div id="Note"><h1>{props.title}</h1><p>{props.key}</p><p>{props.content}</p></div>
};

export default Note;