const { getAllStations, getStationsByLine, calculateFare } = require('./stationUtils');

// process.argv holds everything the user typed in the terminal
// slice(2) removes the first two items (node path + file path)
// so args only contains what the user actually typed
const args = process.argv.slice(2);
const cmd = args[0];

if (!cmd) {
  console.log('Monorail EG - Cairo Monorail CLI');
  console.log('');
  console.log('Commands:');
  console.log('  node monorail.js stations              List all stations');
  console.log('  node monorail.js line <name>           Stations on a line');
  console.log('  node monorail.js fare <from> <to>      Calculate fare');
  process.exit(0);
}

// TODO 1 - 'stations' command
// Call getAllStations() to get the array
// Print how many stations there are
// Loop through them and print each station's name, line, and zone
if (cmd === 'stations') {
  // write your code here
}


  else if (cmd === 'line') {
  const lineName = args[1];

  if (!lineName) {
    console.log('Please provide a line name.');
    console.log('Example: node monorail.js line NAC');
    process.exit(1);
  }

  const stations = getStationsByLine(lineName);

  if (stations.length === 0) {
    console.log('No stations found for line: ' + lineName);
    process.exit(1);
  }

  console.log(lineName + ' line - ' + stations.length + ' stations:');
  console.log('');

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i];
    console.log('  ' + station.name + ' | Zone: ' + station.zone);
  }
}

// TODO 3 - 'fare' command
// args[1] is the fromName, args[2] is the toName
// If either is missing, print an error and exit
// Call calculateFare(fromName, toName)
// If result.error exists, print it and exit
// Otherwise print from, to, line, and fare
else if (cmd === 'fare') {
  const fromName = args[1];
  const toName = args[2];
  // write your code here
}

else {
  console.log('Unknown command: ' + cmd);
  console.log('Run node monorail.js to see available commands.');
  process.exit(1);
}
