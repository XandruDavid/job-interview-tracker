import React from "react";
import { useWorkspaceStore } from "../../store/store";

export const InterviewsList = () => {
    const interviews = useWorkspaceStore((state) => state.workspace.interviews);
    const createNewInterview = useWorkspaceStore((state) => state.createNewInterview);

    return (
        <div>
            {interviews.map((interview) => (
                <div key={interview.id}>{interview.id}</div>
            ))}
            <button onClick={createNewInterview}>Create</button>
        </div>
    );
};
