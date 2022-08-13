import { Company } from "./Company";

export type Interview = {
    id: string;
    status: InterviewStatus;
    company: Company;
};

export type InterviewStatus = "To Contact" | "Contacted" | "Interviewing" | "Rejected" | "Abandoned" | "Ghosted"
