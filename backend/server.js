const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let events = [];


app.get("/events", (req, res) => {
  res.json(events);
});


app.post("/events", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newEvent = {
    id: Date.now(),
    name,
    price
  };

  events.push(newEvent);
  res.json(newEvent);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});