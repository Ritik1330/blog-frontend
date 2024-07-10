export interface OriginalTag {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}


export interface TransformedTag {
    id: string;
    text: string;
}