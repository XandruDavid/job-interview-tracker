import React from "react";

type InterviewFieldProps = {
    label: string;
    value: string;
};

export const InterviewField = ({ label, value }: InterviewFieldProps) => (value ? <span>{value}</span> : <span className="text-slate-300">{label}</span>);
