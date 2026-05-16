import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// TODO1: Load all stations from the JSON file
function getAllStations() {
  
}

// TODO2: Load all stations from the JSON file
function getStationsByLine(lineName) {

}


const BASE_FARE = 5;
const PER_ZONE = 3;

export function calculateFare(fromName, toName) {
  const stations = getAllStations();

  let fromStation = null;
  let toStation = null;

  for (const station of stations) {
    if (station.name.toLowerCase() === fromName.toLowerCase()) {
      fromStation = station;
    }
    if (station.name.toLowerCase() === toName.toLowerCase()) {
      toStation = station;
    }
  }

  if (fromStation === null) {
    return { error: `Station "${fromName}" not found` };
  }

  if (toStation === null) {
    return { error: `Station "${toName}" not found` };
  }

  if (fromStation.line !== toStation.line) {
    return { error: 'These stations are on different lines' };
  }

  const fare = BASE_FARE + Math.abs(fromStation.zone - toStation.zone) * PER_ZONE;

  return {
    from: fromStation.name,
    to: toStation.name,
    line: fromStation.line,
    fare: fare,
    currency: 'EGP',
  };
}

module.exports = { getAllStations, getStationsByLine, calculateFare };
