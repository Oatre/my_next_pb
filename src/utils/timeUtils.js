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

// Test cases for HH:MM:SS format
console.log("\nTesting HH:MM:SS format:");
console.log("00:48:23 =", timeToSeconds("00:48:23"), "seconds"); // Should be 2903
console.log("01:00:00 =", timeToSeconds("01:00:00"), "seconds"); // Should be 3600
console.log("00:22:30 =", timeToSeconds("00:22:30"), "seconds"); // Should be 1350

console.log("\nTesting secondsToTimeString function:");
console.log("2903 seconds =", secondsToTimeString(2903)); // Should be "00:48:23"
console.log("3600 seconds =", secondsToTimeString(3600)); // Should be "01:00:00"
console.log("1350 seconds =", secondsToTimeString(1350)); // Should be "00:22:30"

console.log("\nTesting round-trip conversion:");
const testTime = "00:48:23";
const seconds = timeToSeconds(testTime);
const backToString = secondsToTimeString(seconds);
console.log(`${testTime} -> ${seconds} -> ${backToString}`);
console.log("Round-trip successful:", testTime === backToString);