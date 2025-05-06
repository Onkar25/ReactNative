export const timeStringToDate = (dateStr, timeStr) => {
  // Convert date to MM/DD/YYYY parts
  const [month, day, year] = dateStr.split("/").map(Number);

  // Extract time and AM/PM
  const [timePart, modifier] = timeStr.trim().split(/\s+/);
  const [hourStr, minuteStr, secondStr] = timePart.split(":");

  let hours = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);
  const seconds = parseInt(secondStr || "0", 10);

  if (modifier.toUpperCase() === "PM" && hours < 12) hours += 12;
  if (modifier.toUpperCase() === "AM" && hours === 12) hours = 0;

  // Create a local date object
  return new Date(year, month - 1, day, hours, minutes, seconds);
};