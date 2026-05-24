import express from 'express';
import dotenv from 'dotenv';
import { getAllStations } from './stationUtils.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// TODO 1 - logger middleware
// Write a function called logger that takes (req, res, next)
// Inside it, print req.method and req.url
// Then call next() so Express moves to the next step
// Register it with app.use(logger) before the routes
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(logger);


// GET /stations - return all stations
app.get("/stations", (req, res) => {
  const stations = getAllStations();
  res.json({ count: stations.length, stations: stations });
});

// 404 fallback - leave this as is
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log("Monorail EG server running on http://localhost:" + PORT);
});
