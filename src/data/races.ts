import { timeToSeconds } from "@/utils/timeUtils";


export const races = {
  "5k-parkrun": {
    raceName: "5K Parkrun",
    date: "01-06-2025",
    raceDistance: 5,
    predictedTime: timeToSeconds("00:21:32"),
    actualTime: timeToSeconds("00:22:46"),
    //isPB: true,
    shoes: "Nike Alphafly 3",
  },
  "10k-spring-dash": {
    raceName: "10K Spring Dash",
    date: "07-05-2025",
    raceDistance: 10,
    predictedTime: timeToSeconds("01:01:32"),
    actualTime: timeToSeconds("00:58:03"),
    //isPB: false,
    shoes: "Saucony Endorphin Pro 4",
  },
  "oslo-21k": {
    raceName: "Oslo Half Marathon",
    date: "21-09-2025",
    raceDistance: 21.1,
    predictedTime: timeToSeconds("02:09:17"),
    actualTime: timeToSeconds("02:21:58"),
    //isPB: false,
    shoes: "Saucony Ride 17",
  },
  "trondheim-42k": {
    raceName: "Trondheim Half Marathon",
    date: "13-07-2025",
    raceDistance: 42.2,
    predictedTime: timeToSeconds("05:45:00"),
    actualTime: timeToSeconds("05:43:29"),
    //isPB: true,
    shoes: "Saucony Ride 17",
  },
};

export type Race = {
  raceName: string;
  date: string;
  raceDistance: number;
  predictedTime: number;
  actualTime: number;
  //isPB: boolean;
  shoes: string;
};
