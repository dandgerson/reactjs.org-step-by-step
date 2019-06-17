const fs = require('fs');
const path = require('path');


// fs.watch(
//   path.join(__dirname, 'data.js'),
//   (eventType, filename) => {
//     if (eventType === 'change') updateData();
//     console.log(eventType);
//   }
// );

function updateData() {
  const data = require('./data');

  fs.writeFile(
    path.join(__dirname, 'data.json'),
    JSON.stringify(data),
    err => { if (err) throw err }
  );
}

updateData();
