import { createReducer, on } from "@ngrx/store";
import { BookState } from "./state";
import * as BookActions from './actions';

export const initialState: BookState = {
    id: null,
    title: null,

    isLoading: false
}


export const bookReducer = createReducer(
    initialState,
    on(BookActions.loadBooks, (state, {id, title}) => ({
         ...state,
         id: id,
         title: title,
         isLoading: true
    })),

    on(BookActions.loadBooksSuccess, (state) => ({
        ...state,
        isLoading: false
   }))
)