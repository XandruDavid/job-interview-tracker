import React from "react";
import { useWorkspaceStore } from "../../store/store";

export const InterviewsList = () => {
    const [workspaceName, interviews] = useWorkspaceStore((state) => [state.workspace.name, state.workspace.interviews]);
    const [createNewInterview, deleteInterview] = useWorkspaceStore((state) => [state.createNewInterview, state.deleteInterview]);

    return (
        <div className="p-14">
            <h1 className="mb-12 text-3xl text-slate-900 font-extrabold">
                {workspaceName}
            </h1>
            {interviews.map((interview) => (
                <div key={interview.id} className="my-1 rounded-md p-3 shadow-light-xl bg-white text-slate-700">
                    {interview.id}
                    <button onClick={() => deleteInterview(interview.id)}>-</button>
                </div>
            ))}
            <button onClick={createNewInterview}>Add</button>
        </div>
    );
};
