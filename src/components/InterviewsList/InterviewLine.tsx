import React from "react";
import { Interview } from "../../models/Interview";
import { useWorkspaceStore } from "../../store/store";
import { InterviewField } from "./InterviewField";

type InterviewLineProps = {
    interview: Interview;
};

export const InterviewLine = ({ interview }: InterviewLineProps) => {
    const deleteInterview = useWorkspaceStore((state) => state.deleteInterview);

    return (
        <div key={interview.id} className="my-1 rounded-md p-3 shadow-light-xl bg-white text-slate-700">
            <InterviewField label="" value={interview.status} />
            <InterviewField label="Company" value={interview.company.name} />
            <button onClick={() => deleteInterview(interview.id)}>-</button>
        </div>
    );
};
