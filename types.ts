
export type Language = 'bn' | 'en';

export interface Area {
  id: string;
  name: string;
  nameEn: string;
  url: string;
}

export interface SeatStatsData {
  upazilas?: number;
  municipality: number;
  unions: number;
  roomsPermanent: number;
  roomsTemporary: number;
  roomsTotal: number;
  votersMale: number;
  votersFemale: number;
  votersHijra: number;
  votersTotal: number;
  electionDate?: string;
  electionDateEn?: string;
  secretRooms?: number;
}

export interface Seat {
  id: number;
  name: string;
  nameEn: string;
  centersCount: number;
  areas: Area[];
  detailedStats?: SeatStatsData;
}

export interface Contact {
  name: string;
  nameEn: string;
  designation: string;
  designationEn: string;
  phone: string;
  link?: string;
  isOfficer?: boolean;
}

export interface Translation {
  [key: string]: {
    bn: string;
    en: string;
  };
}
