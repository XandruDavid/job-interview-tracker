import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Interview } from "../../models/Interview";
import { InterviewField } from "./InterviewsListField";
import { StatusPill } from "../StatusPill";
import { useWorkspaceStore } from "../../store/useWorkspaceStore";
import { usePreferencesStore } from "../../store/usePreferencesStore";
import { Density } from "../../models/Preferences";
import { CompanySize } from "../../models/Company";

const densitySpaces: Record<Density, string> = {
    Compact: "my-px py-0.5",
    Normal: "my-0.5 py-2",
    Comfortable: "my-1 py-3",
};

const companySizeOptions: CompanySize[] = ["2-50", "51-200", "201-500", "501-1k", "1k-5k", "5k-10k", "10k+"];

type InterviewLineProps = {
    interview: Interview;
};

export const InterviewLine = ({ interview }: InterviewLineProps) => {
    const [updateInterview, deleteInterview] = useWorkspaceStore((state) => [state.updateInterview, state.deleteInterview]);
    const density = usePreferencesStore((state) => state.prefernces.density);

    return (
        <div key={interview.id} className={`flex items-center ${densitySpaces[density]} px-3 rounded-md shadow-light-xl bg-white text-slate-700 transition-all`}>
            <div className="w-36 flex items-center">
                <StatusPill
                    status={interview.status}
                    editable
                    setStatus={(status) => updateInterview({ ...interview, status: status })}
                    className={density === "Compact" ? "py-0 px-2" : undefined}
                />
            </div>

            <InterviewField
                label="Name"
                value={interview.company.name}
                onChange={(value) => updateInterview({ ...interview, company: { ...interview.company, name: value } })}
                className="flex-1"
            />
            <select
                placeholder="Size"
                value={interview.company.size || ""}
                onChange={(event) => updateInterview({ ...interview, company: { ...interview.company, size: event.target.value as CompanySize } })}
                className="w-28 appearance-none focus:outline-none cursor-pointer"
            >
                {companySizeOptions.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>

            <InterviewField
                label="Role"
                value={interview.job.role}
                onChange={(value) => updateInterview({ ...interview, job: { ...interview.job, role: value } })}
                className="flex-1"
            />
            <InterviewField
                label="Stack"
                value={interview.job.stack}
                onChange={(value) => updateInterview({ ...interview, job: { ...interview.job, stack: value } })}
                className="flex-1"
            />
            <InterviewField
                label="City"
                value={interview.job.city}
                onChange={(value) => updateInterview({ ...interview, job: { ...interview.job, city: value } })}
                className="w-44"
            />
            <InterviewField
                label="Salary"
                value={interview.job.salary}
                onChange={(value) => updateInterview({ ...interview, job: { ...interview.job, salary: value } })}
                className="w-28"
            />

            <button onClick={() => deleteInterview(interview.id)} className="float-right w-12 px-2 text-sm text-slate-600">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};
