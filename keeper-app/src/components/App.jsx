import React from "react";
import Heading from "./Heading";
import Footer from "./Footer"
import Content from "./Content";
import notes from "../notes.js";
import Note from "./Note";

function App() {
    return (
        <div>
            <Heading />
            {notes.map((note) => (<Note key={note.key} title={note.title} content={note.content} />))}
            <Content />
            <Footer />
        </div>
    );
};

export default App;