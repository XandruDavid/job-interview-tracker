import React from "react";
import { useWorkspaceStore } from "../../store/useWorkspaceStore";
import { DensityToggle } from "../DensityToggle";
import { InterviewsListHeader } from "./InterviewsListHeader";
import { InterviewLine } from "./InterviewsListLine";

export const InterviewsList = () => {
    const [workspaceName, interviews] = useWorkspaceStore((state) => [state.workspace.name, state.workspace.interviews]);
    const createNewInterview = useWorkspaceStore((state) => state.createNewInterview);

    return (
        <div className="p-14">
            <h1 className="mb-12 text-3xl text-slate-900 font-extrabold">
                {workspaceName}
                <DensityToggle className="float-right" />
            </h1>
            <InterviewsListHeader />
            {interviews.map((interview) => (
                <InterviewLine key={interview.id} interview={interview} />
            ))}
            <button onClick={createNewInterview} className="py-2 text-sm text-slate-700">
                + Add Interview
            </button>
        </div>
    );
};
