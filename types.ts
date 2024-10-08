import { ParsedUrlQuery } from "querystring";

export interface SearchParams extends ParsedUrlQuery {
  season?: string;
  round?: string;
}

export interface RaceSelectionProps {
  selectedSeason?: string
}

export interface RaceSelectionFormProps extends RaceSelectionProps {
  seasons: Array<Seasons>;
}

export interface PracticeSession {
  date: string;
  time: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Schedule {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: PracticeSession;
  SecondPractice: PracticeSession;
  ThirdPractice: PracticeSession;
  Qualifying: PracticeSession;
}

export interface DropdownProps {
  icon: any;
  label: string;
  options: Array<any>;
  loading?: boolean;
  onChange: (value: any) => void;
  error?: string;
  value?: string;
}

export interface LabelProps {
  label: string;
}

export interface HomeProps extends SearchParams {}

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
  driverId: string;
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
  subtitle?: string;
  nationality?: string;
  points?: string;
  change?: string;
  index?: number;
  timing?: string;
  skipOneIndex?: boolean;
  stopNumber?: string;
  positionGain?: string;
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
  season?: string;
  round?: string;
}

export interface LapDetails {
  lap: string;
  driver: string;
  speed: string;
  constructor: Constructor;
  time: string;
  driverNationality: string;
}

export interface FastestLapProps {
  details: LapDetails;
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

export interface Seasons {
  season: string;
  url: string;
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface RaceInformationProps {
  raceName: string;
  circuit: string;
  date: string;
  time: string;
  locality: string;
  country: string;
}

export interface LapChartServerProps {
  season?: string;
  round?: string;
}

export interface LapChartProps {
  laps: Record<
    string,
    {
      from: string;
      to: string;
      lapData: Array<{ x: number; y: number }>;
    }
  >;
}

export interface LapData {
  number: string;
  Timings: Array<{
    driverId: string;
    position: string;
    time: string;
  }>;
}

export interface PitStop {
  driverId: string;
  lap: string;
  stop: string;
  time: string;
  duration: string;
}

export interface LapGainersLosers {
  driverId: string;
  currentPosition: string;
  previousPosition: string;
  positionChange: number;
}

export type DropdownCompatibleDataLabels = "season" | "schedule";

export interface DataMissingErrorProps {
  msg: string;
  className: string;
  iconSize?: number;
}
