import { v4 as uuidv4 } from "uuid";
import create from "zustand";
import { persist } from "zustand/middleware";
import { Interview } from "../models/Interview";

import { Workspace } from "../models/Workspace";

const LOCAL_STOREAGE_KEY = "database";

const getNewWorkspace: () => Workspace = () => ({
    id: uuidv4(),
    name: "My Interviews",
    interviews: [],
});

const getNewInterview: () => Interview = () => ({
    id: uuidv4(),
});

type WorkspaceState = {
    workspace: Workspace;
    createNewInterview: () => void;
};

export const useWorkspaceStore = create<WorkspaceState>()(
    persist(
        (set) => ({
            workspace: getNewWorkspace(),
            createNewInterview: () => set((state) => ({ workspace: { ...state.workspace, interviews: state.workspace.interviews.concat(getNewInterview()) } })),
        }),
        { name: LOCAL_STOREAGE_KEY },
    ),
);
