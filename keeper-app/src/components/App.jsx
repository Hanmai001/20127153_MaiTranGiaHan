import React from "react";
import Heading from "./Heading";
import Footer from "./Footer"
import Note from "./Note";
import notes from "../notes"
import InputArea from "./InputArea";

function App() {
    return (
        <div>
            <Heading />
            <InputArea/>
            <Note />
            {/* {notes.map((note) => (<Note key={note.key} title={note.title} content={note.content} />))} */}
            <Footer />
        </div>
    );
};

export default App;