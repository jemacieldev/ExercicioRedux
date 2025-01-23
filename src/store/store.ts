import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import contactReducer from "./slices/contactSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        contact: contactReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
