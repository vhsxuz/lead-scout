export interface Lead {
  Name: string;
  Industry: string;
  Headquarters: string;
  Phone?: string | null;
  hot_lead_score: number;
  is_hot_lead: number;
  Source?: string;
}

export interface LandingState {
  industry: string;
  location: string;
  limit: number;
  loading: boolean;
  leads: Lead[];
  error: string | null;
}