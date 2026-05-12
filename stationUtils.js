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

function calculateFare(fromName, toName) {
  const stations = getAllStations();

  let fromStation = null;
  let toStation = null;

  for (let i = 0; i < stations.length; i++) {
    if (stations[i].name === fromName) {
      fromStation = stations[i];
    }
    if (stations[i].name === toName) {
      toStation = stations[i];
    }
  }

  if (fromStation === null) {
    return { error: 'Station "' + fromName + '" not found' };
  }

  if (toStation === null) {
    return { error: 'Station "' + toName + '" not found' };
  }

  if (fromStation.line !== toStation.line) {
    return { error: 'These stations are on different lines' };
  }

  const BASE_FARE = 5;
  const PER_ZONE = 3;

  let zoneDiff = fromStation.zone - toStation.zone;
  if (zoneDiff < 0) {
    zoneDiff = zoneDiff * -1;
  }

  const fare = BASE_FARE + zoneDiff * PER_ZONE;

  return {
    from: fromStation.name,
    to: toStation.name,
    line: fromStation.line,
    fare: fare,
    currency: 'EGP'
  };
}

module.exports = { getAllStations, getStationsByLine, calculateFare };
