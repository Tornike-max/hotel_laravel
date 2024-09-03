export interface CareerType {
    id: string | number;
    description: string;
    employment_type: "Full-time" | "part-time" | "contract";
    experience_level: "Entry-level" | "mid-level" | "senior-level";
    location: string;
    salary: string;
    title: string;
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
