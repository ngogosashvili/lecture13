import { createAction, props } from "@ngrx/store";

export const loadBooks = createAction(
    "[Book Page] load Book",
    props<{id: number, title: string}>()
);


export const loadBooksSuccess = createAction(
    "[Book Page] load Book success"
);

export const loadBooksFail = createAction(
    "[Book Page] load Book fail",
    props<{id: number, title: string}>()
);