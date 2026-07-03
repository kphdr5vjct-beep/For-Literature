export interface Conference {
  id: string; title: string; organizer: string; location: string;
  startDate: string; endDate: string; url: string; description: string;
  tags: string[]; region: "China" | "International" | "Online";
}
export interface CFP {
  id: string; title: string; organizer: string; deadline: string;
  url: string; description: string; tags: string[];
  type: "journal" | "conference" | "volume" | "other";
  topic?: string;
  source?: "manual" | "feed";
}
export interface Resource {
  id: string; title: string; url: string; description: string;
  category: "database" | "journal" | "association" | "archive" | "other";
  tags: string[]; accessType: "free" | "subscription" | "partial";
}
