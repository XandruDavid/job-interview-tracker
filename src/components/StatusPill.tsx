import React from "react";
import { InterviewStatus } from "../models/Interview";

const statusColors: Record<InterviewStatus, string> = {
    "To Contact": "bg-sky-300",
    Contacted: "bg-slate-300",
    Interviewing: "bg-teal-600",
    Rejected: "bg-red-600",
    Abandoned: "bg-amber-600",
    Ghosted: "bg-slate-600",
};

type StatusPillProps = {
    status: InterviewStatus;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export const StatusPill = ({ status, className }: StatusPillProps) => (
    <div className={`inline-block rounded-md px-2 py-1 text-center text-sm font-medium text-white uppercase ${statusColors[status]} ${className}`}>{status}</div>
);
