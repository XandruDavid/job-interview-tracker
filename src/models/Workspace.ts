import { Interview } from "./Interview";

export type Workspace = {
    id: string;
    name: string;
    interviews: Interview[];
};
