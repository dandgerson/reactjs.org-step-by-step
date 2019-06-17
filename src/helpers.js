export function updateData() {
  const fs = require('fs');
  const path = require('path');

  const data = require('./data');

  fs.writeFile(
    path.join(__dirname, 'data.json'),
    JSON.stringify(data),
    err => { if (err) throw err }
  );
}

export function formateDate(date) {
  return date.toLocaleString('ru');
}

export function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
