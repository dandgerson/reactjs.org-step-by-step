export function formateDate(date) {
  return date.toLocaleString('ru');
}

export function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
