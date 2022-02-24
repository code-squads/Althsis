export const initialsFromName = fullName => {
  fullName = fullName.split(' ');
  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  return initials.toUpperCase();
}