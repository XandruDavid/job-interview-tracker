export type Company = {
    name: string;
    size: CompanySize | null;
};

export type CompanySize = "2-50" | "51-200" | "201-500" | "501-1k" | "1k-5k" | "5k-10k" | "10k+";
