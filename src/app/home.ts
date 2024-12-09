export interface Launch {
  fairings: null;
  links: Links;
  static_fire_date_utc: null;
  static_fire_date_unix: null;
  net: boolean;
  window: null;
  rocket: string;
  success: boolean;
  failures: any[];
  details: null;
  crew: Crew[];
  ships: any[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string;
  id: string;
}

export interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}

export interface Crew {
  crew: string;
  role: string;
}

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: null;
  webcast: string;
  youtube_id: string;
  article: null;
  wikipedia: string;
}

export interface Flickr {
  small: any[];
  original: any[];
}

export interface Patch {
  small: string;
  large: string;
}

export interface Reddit {
  campaign: null;
  launch: string;
  media: null;
  recovery: null;
}
