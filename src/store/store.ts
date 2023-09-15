import { configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import { postApi } from "../services/PostService";

export const store = configureStore({
    reducer: {
        userReducer,//userSlice.reducer до 20 минут у улби
        //делали сами предже, сейчас с rtkQery
        [postApi.reducerPath]: postApi.reducer,
    },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch