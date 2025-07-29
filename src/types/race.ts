export type RaceFormData = {
  raceName: string;
  date: string;
  raceDistance: number;
  predictedTime: number;
  actualTime: number;
  isPB: boolean;
  shoes: string;
};

export type Race = {
  id?: string;
  raceName: string;
  date: string;
  raceDistance: number;
  predictedTime: number;
  actualTime: number;
  isPB: boolean;
  shoes: string;
};
