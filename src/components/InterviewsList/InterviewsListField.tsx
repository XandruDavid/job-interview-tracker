import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

type InterviewFieldProps = {
    label: string;
    value: string | null;
    icon?: IconDefinition;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export const InterviewField = ({ label, value, icon, className }: InterviewFieldProps) => (
    <div className={`inline-block ${className}`}>
        {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
        {value ? <span>{value}</span> : <span className="text-slate-300">{label}</span>}
    </div>
);
