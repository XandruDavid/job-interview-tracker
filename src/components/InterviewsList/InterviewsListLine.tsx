import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Interview } from "../../models/Interview";
import { useWorkspaceStore } from "../../store/store";
import { InterviewField } from "./InterviewsListField";
import { StatusPill } from "../StatusPill";

type InterviewLineProps = {
    interview: Interview;
};

export const InterviewLine = ({ interview }: InterviewLineProps) => {
    const deleteInterview = useWorkspaceStore((state) => state.deleteInterview);
    const density = "Compact";

    return (
        <div key={interview.id} className={`${density === "Compact" ? "my-0.5 p-2" : "my-1 p-3"} rounded-md shadow-light-xl bg-white text-slate-700`}>
            <div className="inline-block w-36">
                <StatusPill status={interview.status} />
            </div>

            <InterviewField label="Name" value={interview.company.name} className="w-72" />
            <InterviewField label="Size" value={interview.company.size} className="w-24" />

            <InterviewField label="Role" value={interview.job.role} className="w-24" />
            <InterviewField label="City" value={interview.job.city} className="w-44" />
            <InterviewField label="Stack" value={interview.job.stack} className="w-44" />
            <InterviewField label="Salary" value={interview.job.salary} className="w-24" />
            <button onClick={() => deleteInterview(interview.id)} className="float-right px-2 text-sm text-slate-600">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};
