export const races = {
  "5k-parkrun": {
    raceName: "5K Parkrun",
    date: "01-06-2025",
    raceDistance: "5 Km",
    predictedTime: "22:30",
    actualTime: "21:45",
    isPB: true,
    shoes: "Nike Alphafly 3",
  },
  "10k-spring-dash": {
    raceName: "10K Spring Dash",
    date: "07-05-2025",
    raceDistance: "10 Km",
    predictedTime: "52:00",
    actualTime: "54:10",
    isPB: false,
    shoes: "Saucony Endorphin Pro 4",
  },
  "oslo-21k": {
    raceName: "Oslo Half Marathon",
    date: "21-09-2025",
    raceDistance: "21,1 Km",
    predictedTime: "01:55:00",
    actualTime: "02:10:17",
    isPB: false,
    shoes: "Saucony Ride 17",
  },
  "trondheim-21k": {
    raceName: "Trondheim Half Marathon",
    date: "13-07-2025",
    raceDistance: "21,1 Km",
    predictedTime: "01:49:00",
    actualTime: "01:47:17",
    isPB: true,
    shoes: "Saucony Ride 17",
  },
};

export type Race = {
  raceName: string;
  date: string;
  raceDistance: string;
  predictedTime: string;
  actualTime: string;
  isPB: boolean;
  shoes: string;
};
