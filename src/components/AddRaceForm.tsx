'use client';
import { useState } from 'react';
import { RaceFormData } from '@/types/race';

type AddRaceFormProps = {
  onSubmit: (data: RaceFormData) => void;
  onCancel: () => void;
};

export default function AddRaceForm({ onSubmit, onCancel }: AddRaceFormProps) {
  const [formData, setFormData] = useState<RaceFormData>({
    raceName: '',
    date: '',
    raceDistance: '',
    predictedTime: '',
    actualTime: '',
    isPB: false,
    shoes: '',
  });

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
        onChange={(e) => setFormData({...formData, raceName: e.target.value})}
        className="w-full p-2 border rounded"
        required
      />
      
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({...formData, date: e.target.value})}
        className="w-full p-2 border rounded"
        required
      />
      
      <input
        type="text"
        placeholder="Distance (e.g., 5K, 10K)"
        value={formData.raceDistance}
        onChange={(e) => setFormData({...formData, raceDistance: e.target.value})}
        className="w-full p-2 border rounded"
        required
      />
      
      <input
        type="text"
        placeholder="Predicted Time (e.g., 22:30)"
        value={formData.predictedTime}
        onChange={(e) => setFormData({...formData, predictedTime: e.target.value})}
        className="w-full p-2 border rounded"
        required
      />
      
      <input
        type="text"
        placeholder="Actual Time (e.g., 21:45)"
        value={formData.actualTime}
        onChange={(e) => setFormData({...formData, actualTime: e.target.value})}
        className="w-full p-2 border rounded"
        required
      />
      
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={formData.isPB}
          onChange={(e) => setFormData({...formData, isPB: e.target.checked})}
          className="mr-2"
        />
        Personal Best
      </label>
      
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