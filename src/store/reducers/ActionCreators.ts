import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

//СПОСОБ С RTK

// function getErrorMessage(error: unknown) {
//   if (error instanceof Error) return error.message;
//   return String(error);
// }

//для асинхронного фетча
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFethcing())//попытка получить данные
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')//фетч, полученные данные пришли в респонс
//         dispatch(userSlice.actions.usersFethcingSucces(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFethcingError(getErrorMessage(e)))
//     }
// }

export const fetchUsers = createAsyncThunk(
  //extra reducers
  //ещё как способ фетчить
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      ); //фетч, полученные данные пришли в респонс
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
