const fs = require("fs");
const path = require("path");

// TODO 1 - getAllStations
// Read the file at data/stations.json using fs.readFileSync
// Parse it with JSON.parse and return the array
// Hint: use path.join(__dirname, 'data', 'stations.json') for the file path
function getAllStations() {
  // write your code here
}

function getStationsByLine(lineName) {
  const stations = getAllStations();
  const result = [];

  for (let i = 0; i < stations.length; i++) {
    if (stations[i].line === lineName) {
      result.push(stations[i]);
    }
  }

  return result;
}

// TODO 2 - calculateFare
// Use getAllStations() to get all stations
// Find the station where station.name === fromName  (call it fromStation)
// Find the station where station.name === toName    (call it toStation)
// If either is not found, return { error: 'Station not found' }
// If they are on different lines, return { error: 'These stations are on different lines' }
// Fare rule: BASE_FARE = 5, PER_ZONE = 3
// zoneDiff = difference between zones (always positive)
// fare = BASE_FARE + zoneDiff * PER_ZONE
// Return: { from, to, line, fare, currency: 'EGP' }
function calculateFare(fromName, toName) {
  // write your code here
}

module.exports = { getAllStations, getStationsByLine, calculateFare };
