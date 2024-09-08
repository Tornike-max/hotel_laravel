export interface CareerType {
    id: string | number;
    description: string;
    employment_type: "Full-time" | "part-time" | "contract";
    experience_level: "Entry-level" | "mid-level" | "senior-level";
    location: string;
    salary: string;
    title: string;
    created_at: string;
    company: {
        name: string;
        website: string;
        logo: string;
        description: string;
        user: {
            name: string;
            email: string;
            profile_picture: string;
            role: string;
        };
    };
}

export interface CareerFormInputs {
    title: string;
    description: string;
    logo?: FileList;
    salary?: number;
    location: string;
    employment_type: string;
    experience_level: string;
}
