const express = require("express");
const cors = require("cors");
const axios = require("axios"); // You need to import axios

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username }, // Add a comma here
      { headers: { "private-key": "a8ad77ac-bda3-46d5-9d51-e627c8a54276" }
      }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // Handle the error appropriately
  }

  return res.status(e.response.status).json(e.response.data);
});

app.listen(3001);
