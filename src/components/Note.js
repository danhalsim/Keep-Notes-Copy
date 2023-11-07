import { Button, Paper } from "@mui/material";
import React from "react";

function Note({ title, content, id, deleteNote }) {
  function clickHandler() {
    deleteNote(id);
  }

  return (
    <Paper
      elevation={3}
      style={{
        minWidth: "200px",
        minHeight: "100px",
        padding: "10px",
        margin: "20px",
        display: "inline-flex",
      }}
    >
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Button onClick={clickHandler} style={{ marginLeft: "120px" }}>
        <svg
          class="w-[20px] h-[20px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
          />
        </svg>
      </Button>
    </Paper>
  );
}

export default Note;
