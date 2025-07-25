// Simple script to calculate times correctly from input
// Converts HH:MM:SS form input into seconds, function will be used for comparing different results etc.

export function timeToSeconds(timeStr) {
  const parts = timeStr.split(":");

  if (parts.length === 3) {
    // HH:MM:SS format
    const [hours, minutes, seconds] = parts.map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  } else if (parts.length === 2) {
    // MM:SS format (fallback)
    const [minutes, seconds] = parts.map(Number);
    return minutes * 60 + seconds;
  }

  return 0; // Invalid format
}

export function secondsToTimeString(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Test cases
console.log("Testing timeToSeconds function:");
console.log("22:30 =", timeToSeconds("22:30"), "seconds"); // Should be 1350
console.log("5:15 =", timeToSeconds("5:15"), "seconds"); // Should be 315
console.log("0:45 =", timeToSeconds("0:45"), "seconds"); // Should be 45
console.log("60:00 =", timeToSeconds("60:00"), "seconds"); // Should be 3600
