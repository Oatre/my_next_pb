"use client";
import { useState } from "react";
import { RaceFormData } from "@/types/race";
import { timeToSeconds, secondsToTimeString } from "@/utils/timeUtils.js";

type AddRaceFormProps = {
  onSubmit: (data: RaceFormData) => void;
  onCancel: () => void;
};

/**
 * A form component for adding a new race entry.
 *
 * @param {AddRaceFormProps} props - The props for the AddRaceForm component.
 * @param {(formData: RaceFormData) => void} props.onSubmit - Callback invoked when the form is submitted with the race data.
 * @param {() => void} props.onCancel - Callback invoked when the cancel button is clicked.
 *
 * @returns {JSX.Element} The rendered form for adding a race.
 *
 * @remarks
 * - The form includes fields for race name, date, distance, predicted time, actual time, personal best indicator, and shoes.
 * - All fields except "shoes" are required.
 * - The "Add Race" button submits the form, while the "Cancel" button invokes the cancel callback.
 *
 * 25-7-2025: Imported timeUtils, a function that allows the program to convert the HH:MM:SS into seconds, which in turn can allow
 * the program to compared time results. Previously had Personal best button, however the program comparing two times should handle the if its a PB or not.
 *
 *
 */
export default function AddRaceForm({ onSubmit, onCancel }: AddRaceFormProps) {
  const initialFormData: RaceFormData = {
    raceName: "",
    date: "",
    raceDistance: 0,
    predictedTime: 0,
    actualTime: 0,
    isPB: false,
    shoes: "",
  };

  const [formData, setFormData] = useState<RaceFormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Race Name"
        value={formData.raceName}
        onChange={(e) => setFormData({ ...formData, raceName: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        className="w-full p-2 border rounded"
        required
      />
      <label htmlFor="distance">Race Distance</label>
      <input
        type="number"
        id="distance"
        name="distance"
        placeholder="Distance (km)"
        value={formData.raceDistance || ""}
        onChange={(e) =>
          setFormData({
            ...formData,
            raceDistance:
              e.target.value === ""
                ? formData.raceDistance
                : Number(e.target.value) || 0,
          })
        }
        className="w-full p-2 border rounded"
        required
      />
      <label htmlFor="predictedTime">Predicted Time</label>
      <input
        type="text"
        id="predictedTime"
        name="predictedTime"
        placeholder="HH:MM:SS"
        value={secondsToTimeString(formData.predictedTime)}
        onChange={(e) =>
          setFormData({
            ...formData,
            predictedTime: timeToSeconds(e.target.value) || 0,
          })
        }
        className="w-full p-2 border rounded"
        required
      />
      <label htmlFor="actualTime">Actual Time</label>
      <input
        type="text"
        id="actualTime"
        name="actualTime"
        placeholder="HH:MM:SS"
        value={secondsToTimeString(formData.actualTime) || ""}
        onChange={(e) =>
          setFormData({
            ...formData,
            actualTime: timeToSeconds(e.target.value) || 0,
          })
        }
        className="w-full p-2 border rounded"
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Race
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
