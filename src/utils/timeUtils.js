// Simple script to calculate times correctly from input
// Converts MM:SS form input into seconds, function will be used for comparing different results etc.

function timeToSeconds(timeStr) {
  const [minutes, seconds] = timeStr.split(":").map(Number);
  return minutes * 60 + seconds;
}

// Test cases
console.log("Testing timeToSeconds function:");
console.log("22:30 =", timeToSeconds("22:30"), "seconds"); // Should be 1350
console.log("5:15 =", timeToSeconds("5:15"), "seconds"); // Should be 315
console.log("0:45 =", timeToSeconds("0:45"), "seconds"); // Should be 45
console.log("60:00 =", timeToSeconds("60:00"), "seconds"); // Should be 3600