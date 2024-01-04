import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:8000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {"content-type":"application/json"},
          }).then(async (res) => {
            const json = await res.json;
            console.log(json);
            alert("todo added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
