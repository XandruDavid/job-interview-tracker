import React from "react";
import { useWorkspaceStore } from "../../store/store";
import { InterviewLine } from "./InterviewLine";

export const InterviewsList = () => {
    const [workspaceName, interviews] = useWorkspaceStore((state) => [state.workspace.name, state.workspace.interviews]);
    const createNewInterview = useWorkspaceStore((state) => state.createNewInterview);

    return (
        <div className="p-14">
            <h1 className="mb-12 text-3xl text-slate-900 font-extrabold">{workspaceName}</h1>
            {interviews.map((interview) => (
                <InterviewLine key={interview.id} interview={interview} />
            ))}
            <button onClick={createNewInterview}>Add</button>
        </div>
    );
};
