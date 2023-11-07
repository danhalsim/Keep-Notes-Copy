import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Form from "./components/Form";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((preNotes) => {
      return [...preNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  // map through notes array
  return (
    <div>
      <Header />
      <Form addNote={addNote} />
      <div
        class="md:grid-cols-2"
        style={{ margin: "10px 15%", padding: "25px 50px" }}
      >
        {notes.map((note, index) => (
          <Note
            id={index}
            deleteNote={deleteNote}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
