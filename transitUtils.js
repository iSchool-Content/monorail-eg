import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Data loader ────────────────────────────────────────────────────────────
// Reads both JSON files once and caches the result.
// You don't need to change this — just call loadData() inside your functions.

let _stations = null;
let _schedules = null;

const loadData = async () => {
  if (_stations && _schedules) return { stations: _stations, schedules: _schedules };
  const [stationsRaw, schedulesRaw] = await Promise.all([
    readFile(join(__dirname, 'data', 'stations.json'), 'utf-8'),
    readFile(join(__dirname, 'data', 'schedules.json'), 'utf-8'),
  ]);
  _stations = JSON.parse(stationsRaw);
  _schedules = JSON.parse(schedulesRaw);
  return { stations: _stations, schedules: _schedules };
};

// ─── TODO 1 — getAllStations ─────────────────────────────────────────────────
// Returns the full array of station objects.
// Hint: call loadData(), destructure stations out of the result, return it.

export const getAllStations = async () => {
  // TODO: load data and return all stations
};

// ─── TODO 2 — getStationsByLine ──────────────────────────────────────────────
// Returns only the stations that belong to the given line.
// Example: getStationsByLine('NAC') → [ { name: 'Heliopolis', line: 'NAC', ... }, ... ]
// Hint: use .filter() and compare line names case-insensitively.

export const getStationsByLine = async (line) => {
  // TODO: load data, filter stations by line, return the result
};

// ─── TODO 3 — getNextDeparture ───────────────────────────────────────────────
// Returns the next scheduled departure from a given station.
// Peak hours are 7–9am and 5–7pm. Use schedule.peak or schedule.offPeak accordingly.
// Return: { station, next, isPeak }
// Hint: get current hour/minute with new Date(), compare with the times array.

export const getNextDeparture = async (stationName) => {
  // TODO: load data, find the schedule for stationName, figure out peak/off-peak,
  //       find the next departure time after now, return the result object.
  //       Return null if the station doesn't exist in schedules.
};

// ─── TODO 4 — calculateFare ──────────────────────────────────────────────────
// Calculates the fare between two stations based on zone difference.
// BASE_FARE = 5 EGP, +3 EGP per zone crossed.
// Return: { from, to, line, fare, currency: 'EGP' }
// Return an error object if either station is not found or they're on different lines.

export const calculateFare = async (fromName, toName) => {
  // TODO: load data, find both stations by name (case-insensitive),
  //       handle not-found and cross-line errors,
  //       calculate fare using zone difference, return the result object.
};
