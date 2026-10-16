export type ContactStatus =
  | "Active"
  | "In Progress"
  | "Converted"
  | "Cold"
  | "Not Interested";

export type ContactRole =
  | "Buyer"
  | "Seller"
  | "Investor"
  | "Broker"
  | "Developer";

export interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  role: ContactRole;
  phone: string;
  dealStage: string;
  status: ContactStatus;
  assignedTo: string;
  city: string;
  leadSource: string;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: "home" | "users" | "handshake" | "coins";
}
