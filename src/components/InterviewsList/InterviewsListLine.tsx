import React from "react";
import { Interview } from "../../models/Interview";
import { useWorkspaceStore } from "../../store/store";
import { InterviewField } from "./InterviewsListField";

type InterviewLineProps = {
    interview: Interview;
};

export const InterviewLine = ({ interview }: InterviewLineProps) => {
    const deleteInterview = useWorkspaceStore((state) => state.deleteInterview);

    return (
        <div key={interview.id} className="my-1 rounded-md p-3 shadow-light-xl bg-white text-slate-700">
            <InterviewField label="" value={interview.status} className="w-28"/>
            <InterviewField label="Name" value={interview.company.name} className="w-72" />
            <InterviewField label="Size" value={interview.company.size} className="w-24" />
            <button onClick={() => deleteInterview(interview.id)}>-</button>
        </div>
    );
};
