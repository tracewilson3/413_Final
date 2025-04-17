import { Entertainer } from './Entertainer';

export type Engagement = {
  engagementNumber?: number;
  startDate: string;
  endDate: string;
  startTime: string;
  stopTime: string;
  contractPrice: number;
  customerID: number;
  agentID: number;
  entertainerID: number;

  entertainer?: Entertainer; // Optional: only if populated with related data
};
