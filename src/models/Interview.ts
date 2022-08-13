import { Company } from "./Company";
import { Job } from "./Job";

export type Interview = {
    id: string;
    status: InterviewStatus;
    company: Company;
    job: Job;
};

export type InterviewStatus = "To Contact" | "Contacted" | "Interviewing" | "Rejected" | "Abandoned" | "Ghosted"
