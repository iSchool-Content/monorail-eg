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

// TODO 2 - 'line' command
else if (cmd === 'line') {
}

else if (cmd === 'fare') {
  const fromName = args[1];
  const toName = args[2];

  if (!fromName || !toName) {
    console.log('Please provide both station names.');
    console.log('Example: node monorail.js fare Heliopolis "NAC Central"');
    process.exit(1);
  }

  const result = calculateFare(fromName, toName);

  if (result.error) {
    console.log('Error: ' + result.error);
    process.exit(1);
  }

  console.log('Fare estimate:');
  console.log('  From : ' + result.from);
  console.log('  To   : ' + result.to);
  console.log('  Line : ' + result.line);
  console.log('  Fare : ' + result.fare + ' ' + result.currency);
}

else {
  console.log('Unknown command: ' + cmd);
  console.log('Run node monorail.js to see available commands.');
  process.exit(1);
}
