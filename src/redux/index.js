import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/api/index";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer, // caching
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
