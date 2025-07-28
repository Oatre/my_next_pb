import { secondsToTimeString } from "@/utils/timeUtils";

type RaceCardProps = {
  raceName: string;
  date: string;
  raceDistance: number;
  predictedTime: number;
  actualTime: number;
  isPB?: boolean;
};

export default function RaceCard({
  raceName,
  date,
  raceDistance,
  predictedTime,
  actualTime,
  isPB = false,
}: RaceCardProps) {
  return (
    <div className="bg-teal-800 border border-teal-950 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-lg font-bold text-white">{raceName}</h2>
        {isPB && <span className="text-yellow-500 text-lg">🥇</span>}
      </div>
      <p className="text-sm text-white">{date}</p>
      <div className="mt-2 text-sm space-y-1">
        <p className="text-white">
          Predicted:{" "}
          <strong>
            {predictedTime > 0 ? secondsToTimeString(predictedTime) : "Not set"}
          </strong>
        </p>
        <p className="text-white">
          Actual:{" "}
          <strong>
            {actualTime > 0 ? secondsToTimeString(actualTime) : "Not set"}
          </strong>
        </p>
        <p className="text-white">
          Distance: <strong>{raceDistance} km </strong>
        </p>
      </div>
    </div>
  );
}
