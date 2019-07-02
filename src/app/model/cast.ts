export interface Credits {
    cast: Cast[];
    crew: any[];
}

export interface Cast {
    cast_id:      number;
    character:    string;
    credit_id:    string;
    gender:       number;
    id:           number;
    name:         string;
    order:        number;
    profile_path: string;
}