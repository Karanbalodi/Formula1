export interface HeaderProps {}

export interface RankingCardProps {
  name: string;
  points: string;
  time: string;
  status: string;
  grid: string;
  index: number;
  driverNumber: string;
  constructor: Constructor;
  nationality: string;
}

export type NationalityToCountryCode = {
  [key: string]: string;
};

export interface FlagRoundedProps {
  code: string;
}

export interface CountryNameProps {
  className: string;
  code: string;
}

export interface StandingsRowProps {
  name: string;
  subtitle: string;
  nationality: string;
  points: string;
  change?: string;
  index: number;
  timing?: string;
  skipOneIndex?: boolean;
}

export interface PositionListingProps {
  raceDetails: Array<RacingData>;
}

export interface LapsRowProps {
  name: string;
  subtitle: string;
  nationality: string;
  speed: string;
  index: number;
}

export interface MapComponentProps {
  latitude: number;
  longitude: number;
}
export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface Time {
  millis: string;
  time: string;
}

export interface AverageSpeed {
  units: string;
  speed: string;
}

export interface FastestLap {
  rank: string;
  lap: string;
  Time: {
    time: string;
  };
  AverageSpeed: AverageSpeed;
}

export interface RacingData {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: Time;
  FastestLap: FastestLap;
}

export interface RaceDetailsProps {
  latitude: number;
  longitude: number;
  raceDetails: Array<RacingData>;
}

export interface LapDetails {
  lap?: string;
  driver?: string;
  speed?: string;
  constructor?: Constructor;
  position?: string;
  time?: string;
  driverNationality?: string;
}

export interface FastestLapProps {
  details: Array<LapDetails>;
}

export interface DriverStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface ConstructorStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

export interface StandingsProps {
  driverStandings: Array<DriverStandingsData>;
  constructorStandings: Array<ConstructorStandingsData>;
}

export interface DriverStandingsData {
  name: string;
  subtitle: string;
  nationality: string;
  points: string;
  change?: string;
}

export interface ConstructorStandingsData {
  name: string;
  subtitle: string;
  nationality: string;
  points: string;
}

export interface RaceGridScatterPlotProps {
  raceDetails: Array<RacingData>;
}

export interface FastestLapsBarChartProps {
  raceDetails: Array<RacingData>;
}
