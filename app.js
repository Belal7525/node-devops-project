const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8090;
const MONGO_URI = process.env.MONGO_URI;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;

/* MongoDB Connection */
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* Redis Connection */
const redisClient = redis.createClient({
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});

redisClient.connect()
  .then(() => console.log("Redis Connected"))
  .catch(console.error);

/* Routes */
app.get("/", (req, res) => {
  res.json({ message: "Node DevOps App is running " });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
