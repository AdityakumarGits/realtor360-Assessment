import type { Contact, Metric } from "../types";

export const metrics: Metric[] = [
  { label: "Active Listing", value: "23", change: "-12%", trend: "down", icon: "home" },
  { label: "Active Leads", value: "120", change: "+12%", trend: "up", icon: "users" },
  { label: "Total Closed", value: "42", change: "+12%", trend: "up", icon: "handshake" },
  { label: "Total Revenue", value: "Rs.22Cr.", change: "+12%", trend: "up", icon: "coins" },
];

export const contacts: Contact[] = [
  { id: 1, name: "John Doe", email: "john@urbanrealty.com", company: "Urban Realty", role: "Broker", phone: "+91 9411521487", dealStage: "Negotiation", status: "Active", assignedTo: "Jessica Chen", city: "Delhi", leadSource: "Website Form" },
  { id: 2, name: "Ananya Verma", email: "ananya@urbanrealty.com", company: "Urban Realty", role: "Buyer", phone: "+91 9411521487", dealStage: "Negotiation", status: "In Progress", assignedTo: "Jessica Chen", city: "Mumbai", leadSource: "Inbound Call" },
  { id: 3, name: "Ravi Kapoor", email: "ravi@urbanrealty.com", company: "Urban Realty", role: "Developer", phone: "+91 9411521487", dealStage: "Negotiation", status: "Cold", assignedTo: "Mohit", city: "Pune", leadSource: "Reference" },
  { id: 4, name: "Emily Mehra", email: "emily@urbanrealty.com", company: "Urban Realty", role: "Buyer", phone: "+91 9411521487", dealStage: "Negotiation", status: "Converted", assignedTo: "Jessica Chen", city: "Bengaluru", leadSource: "Website Form" },
  { id: 5, name: "John Doe", email: "john2@urbanrealty.com", company: "Urban Realty", role: "Seller", phone: "+91 9411521487", dealStage: "Negotiation", status: "Not Interested", assignedTo: "Arjun", city: "Hyderabad", leadSource: "Facebook" },
  { id: 6, name: "Ananya Verma", email: "ananya2@urbanrealty.com", company: "Urban Realty", role: "Buyer", phone: "+91 9411521487", dealStage: "Negotiation", status: "Active", assignedTo: "Jessica Chen", city: "Delhi", leadSource: "Inbound Call" },
  { id: 7, name: "Ravi Kapoor", email: "ravi2@urbanrealty.com", company: "Urban Realty", role: "Investor", phone: "+91 9411521487", dealStage: "Negotiation", status: "Active", assignedTo: "Emily", city: "Pune", leadSource: "Reference" },
];

export const leadSourceData = [
  { name: "Website", value: 10 },
  { name: "Inbound Call", value: 9 },
  { name: "Reference", value: 1 },
  { name: "Facebook", value: 1 },
];

export const stageData = [
  { stage: "Interested", plaza: 3, garden: 2, none: 2.5 },
  { stage: "Site Visit Done", plaza: 4, garden: 3.5, none: 3 },
  { stage: "Unit Shortlisted", plaza: 3.5, garden: 3, none: 2.7 },
  { stage: "Contract Signed", plaza: 4, garden: 3.5, none: 2.7 },
  { stage: "Offer Initiated", plaza: 3.2, garden: 2.8, none: 2.5 },
  { stage: "Offer Accepted", plaza: 4, garden: 3.2, none: 2.8 },
];

export const salesPeopleData = [
  { name: "Jessica", plaza: 5, garden: 6.5, none: 7 },
  { name: "Mohit", plaza: 2.5, garden: 5.5, none: 4.5 },
];

export const pipelineData = [
  { name: "None", count: 14 },
  { name: "Angel Plaza", count: 3 },
  { name: "Angel Garden", count: 1 },
];

export const reminders = [
  { title: "Submit Final Offer- Villa Deal", description: "Finalize and send offer documents." },
  { title: "Review Contract with Legal", description: "Ensure attorney reviews apartment deal contract today." },
  { title: "Call Jessica Chen – Follow-up", description: "Discuss her feedback after site visit to Angel Plaza." },
];