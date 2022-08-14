import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Interview } from "../../models/Interview";
import { InterviewField } from "./InterviewsListField";
import { StatusPill } from "../StatusPill";
import { useWorkspaceStore } from "../../store/useWorkspaceStore";
import { usePreferencesStore } from "../../store/usePreferencesStore";
import { Density } from "../../models/Preferences";

type InterviewLineProps = {
    interview: Interview;
};

const densitySpaces: Record<Density, string> = {
    Compact: "my-px py-0.5",
    Normal: "my-0.5 py-2",
    Comfortable: "my-1 py-3"
}

export const InterviewLine = ({ interview }: InterviewLineProps) => {
    const deleteInterview = useWorkspaceStore((state) => state.deleteInterview);
    const density = usePreferencesStore((state) => state.prefernces.density);

    return (
        <div key={interview.id} className={`flex items-center ${densitySpaces[density]} px-3 rounded-md shadow-light-xl bg-white text-slate-700`}>
            <div className="w-36 flex items-center">
                <StatusPill status={interview.status} className={density === "Compact" ? "py-0 px-2" : undefined}/>
            </div>

            <InterviewField label="Name" value={interview.company.name} className="flex-1 w-72" />
            <InterviewField label="Size" value={interview.company.size} className="w-24" />

            <InterviewField label="Role" value={interview.job.role} className="flex-1 w-24" />
            <InterviewField label="City" value={interview.job.city} className="w-44" />
            <InterviewField label="Stack" value={interview.job.stack} className="w-44" />
            <InterviewField label="Salary" value={interview.job.salary} className="w-24" />
            <button onClick={() => deleteInterview(interview.id)} className="float-right w-12 px-2 text-sm text-slate-600">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};
