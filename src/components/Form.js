import { Fab, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

function Form({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function clickHandler() {
    if (note) {
      addNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  }

  // spread operator for previous values
  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  }
  return (
    <Paper elevation={3} style={{ margin: "10px 20%", padding: "25px 50px" }}>
      <form>
        <TextField
          variant="standard"
          onChange={changeHandler}
          name="title"
          value={note.title}
          label="Title"
          fullWidth
          autoComplete="off"
        />
        <TextField
          variant="standard"
          onChange={changeHandler}
          name="content"
          value={note.content}
          label="Take a note..."
          fullWidth
          autoComplete="off"
          multiline
          rows={4}
        />

        {/* add note button */}
        <Fab
          onClick={clickHandler}
          style={{ marginTop: "20px", color: "white" }}
        >
          <svg
            class="w-[20px] h-[20px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </Fab>
      </form>
    </Paper>
  );
}

export default Form;
