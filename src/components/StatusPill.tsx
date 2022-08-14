import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { InterviewStatus } from "../models/Interview";

const statusColors: Record<InterviewStatus, { bg: string; text: string }> = {
    "To Contact": { bg: "bg-sky-300", text: "text-sky-300" },
    Contacted: { bg: "bg-slate-300", text: "text-slate-300" },
    Interviewing: { bg: "bg-teal-600", text: "text-teal-600" },
    Rejected: { bg: "bg-red-600", text: "text-red-600" },
    Abandoned: { bg: "bg-amber-600", text: "text-amber-600" },
    Ghosted: { bg: "bg-slate-600", text: "text-slate-600" },
};

const statusOptions: InterviewStatus[] = ["To Contact", "Contacted", "Interviewing", "Rejected", "Abandoned", "Ghosted"];

type StatusPillProps = {
    status: InterviewStatus;
    editable?: boolean;
    setStatus?: (status: InterviewStatus) => void;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export const StatusPill = ({ status, editable, setStatus, className }: StatusPillProps) => {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            dropdownVisible && ref.current && !ref.current.contains(e.target as Element) && setDropdownVisible(false);
        };
        dropdownVisible && document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, [dropdownVisible, ref]);

    return (
        <div className="relative">
            <div
                onClick={editable ? () => setDropdownVisible(!dropdownVisible) : undefined}
                className={`inline-block rounded-md px-2 py-1 text-center text-sm font-medium uppercase text-white transition-all ${statusColors[status].bg} ${
                    editable && "cursor-pointer"
                } ${className}`}
            >
                {status}
            </div>
            {editable && (
                <div
                    ref={ref}
                    className={`${dropdownVisible ? "" : "hidden"} absolute z-10 top-0 left-full ml-4 min-w-max rounded-md p-4 flex flex-col items-start gap-2 bg-white shadow-lg`}
                >
                    {statusOptions
                        .map((s) => (
                            <button
                                key={s}
                                onClick={() => {
                                    setStatus && setStatus(s);
                                    setDropdownVisible(false);
                                }}
                            >
                                <FontAwesomeIcon icon={faSquare} className={`mr-1 ${statusColors[s].text}`} /> <span className="text-sm font-medium uppercase">{s}</span>
                            </button>
                        ))}
                </div>
            )}
        </div>
    );
};
