import React from "react";

type InterviewFieldProps = {
    label: string;
    value: string | null;
    onChange?: (value: string) => void;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export const InterviewField = ({ label, value, onChange, className }: InterviewFieldProps) => (
    <div className={`inline-block ${className} pr-2`}>
        <input
            type="text"
            placeholder={label}
            value={value || ""}
            onChange={(event) => (onChange ? onChange(event.target.value) : undefined)}
            className="focus:outline-none w-full overflow-ellipsis"
        />
    </div>
);
