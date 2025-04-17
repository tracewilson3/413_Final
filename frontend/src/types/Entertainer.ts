import { Engagement } from "./Engagement";

export type Entertainer = {
    entertainerID?: number;
    entStageName: string;
    entSSN: string;
    entStreetAddress: string;
    entCity: string;
    entState: string;
    entZipCode: string;
    entPhoneNumber: string;
    entWebPage: string;
    entEmailAddress: string;
    dateEntered: string;
  
    engagements?: Engagement[]; // Optional: only include if you're returning nested data
  };
  