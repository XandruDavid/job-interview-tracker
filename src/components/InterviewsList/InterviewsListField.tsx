import React from "react";

type InterviewFieldProps = {
    label: string;
    value: string | null;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export const InterviewField = ({ label, value, className }: InterviewFieldProps) => (
    <div className={`inline-block ${className}`}>{value ? <span>{value}</span> : <span className="text-slate-300">{label}</span>}</div>
);
