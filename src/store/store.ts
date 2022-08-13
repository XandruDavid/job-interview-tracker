import { v4 as uuidv4 } from "uuid";
import create from "zustand";
import { persist } from "zustand/middleware";
import { Company } from "../models/Company";
import { Interview } from "../models/Interview";
import { Job } from "../models/Job";

import { Workspace } from "../models/Workspace";

const LOCAL_STOREAGE_KEY = "database";

const getNewWorkspace: () => Workspace = () => ({
    id: uuidv4(),
    name: "My Interviews",
    interviews: [],
});

const getNewInterview: () => Interview = () => ({
    id: uuidv4(),
    status: "Contacted",
    company: getNewCompany(),
    job: getNewJob(),
});

const getNewCompany: () => Company = () => ({
    name: "",
    size: "201-500",
});

const getNewJob: () => Job = () => ({
    role: "Backend",
    city: "Munich",
    stack: "Java Spring",
    salary: "65k-85k",
});

type WorkspaceState = {
    workspace: Workspace;
    createNewInterview: () => void;
    deleteInterview: (id: string) => void;
};

export const useWorkspaceStore = create<WorkspaceState>()(
    persist(
        (set) => ({
            workspace: getNewWorkspace(),
            createNewInterview: () => set((state) => ({ workspace: { ...state.workspace, interviews: state.workspace.interviews.concat(getNewInterview()) } })),
            deleteInterview: (id) => set((state) => ({ workspace: { ...state.workspace, interviews: state.workspace.interviews.filter((interview) => interview.id != id) } })),
        }),
        { name: LOCAL_STOREAGE_KEY },
    ),
);
