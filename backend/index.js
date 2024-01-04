const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", async(req, res) => {
    const todos = await todo.find({});
    res.json({todos});
});

app.post("/todo", async (req, res) => {
  const payload = req.body;
  const parsedPayload = createTodo.safeParse(payload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }

  try {
    await todo.create({
      title: parsedPayload.title,
      description: parsedPayload.description,
      completed: false
    });
    res.json({
      msg: "Todo Created...!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.put("/completed", async (req, res) => {
  const id = req.body.id;
  const parsedData = updateTodo.safeParse({ id });
  if (!parsedData.success) {
    res.status(411).json({
      msg: "You sent the wrong id",
    });
  }

    await todo.update({
        _id: id
    },{
        completed: true
    });

    res.json({
        msg: "Todo marked as completed!"
    })

});

app.listen(8000, () => {
  console.log(`Server started on http://localhost:8000`);
});
