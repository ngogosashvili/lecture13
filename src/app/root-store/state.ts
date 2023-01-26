

export interface BookState{
    id: number;
    title: string;

    // booklist: BookModel[];
    isLoading: boolean;
}

export interface BookModel{
    id: number;
    title: string;
}