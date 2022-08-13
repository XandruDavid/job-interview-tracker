import React from "react";
import { useWorkspaceStore } from "../../store/store";

export const InterviewsList = () => {
    const interviews = useWorkspaceStore((state) => state.workspace.interviews);
    const [createNewInterview, deleteInterview] = useWorkspaceStore((state) => [state.createNewInterview, state.deleteInterview]);

    return (
        <div>
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
