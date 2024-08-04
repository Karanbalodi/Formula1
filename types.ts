export interface HeaderProps {}

export interface RankingCardProps {}

export type NationalityToCountryCode = {
  [key: string]: string;
};

export interface FlagRoundedProps {
  code: string;
}

export interface StandingsRowProps {
  name: string;
  subtitle: string;
  nationality: string;
  points: number;
  change: number;
  index: number;
}
