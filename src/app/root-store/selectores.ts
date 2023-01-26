import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookState } from "./state";



export const selectBook = createFeatureSelector<BookState>('books');

export const selectBookId = createSelector(
    selectBook,
    e => e.id
);

export const selectBookTitle = createSelector(
    selectBook,
    e => e.title
);

export const selectIsBookLoading = createSelector(
    selectBook,
    e => e.isLoading
);

export const selectBookItem = createSelector(
    selectBookId,
    selectBookTitle,
    (i, t) => {
        return {id: i, title: t}
    }
);


