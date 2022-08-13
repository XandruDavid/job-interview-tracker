import React from "react";
import { useWorkspaceStore } from "../../store/store";

export const InterviewsList = () => {
    const [workspaceName, interviews] = useWorkspaceStore((state) => [state.workspace.name, state.workspace.interviews]);
    const [createNewInterview, deleteInterview] = useWorkspaceStore((state) => [state.createNewInterview, state.deleteInterview]);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                {workspaceName}
            </h1>
            {interviews.map((interview) => (
                <div key={interview.id}>
                    {interview.id}
                    <button onClick={() => deleteInterview(interview.id)}>-</button>
                </div>
            ))}
            <button onClick={createNewInterview}>Create</button>
        </div>
    );
};
