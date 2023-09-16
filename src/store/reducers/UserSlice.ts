import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

//-------------------------
//слайсы - один из способов
//-------------------------

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: { //дефолт RTK
    // usersFetching(state){
    //   state.isLoading = true
    // },
    // usersFetchingSuccess(state,action : PayloadAction<IUser[]>){
    //   state.isLoading = false
    //   state.users = action.payload
    //   state.error = ''
    // },
    // usersFetchingError(state,action : PayloadAction<string>){
    //   state.isLoading = false
    //   state.error = action.payload
    // },
  },
  extraReducers: {//работает с AsyncThunk
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload; //всё что пришло в пейлоаде переходит к пользакам
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload; //ошибка приходит как строка из пейлоада
    },
  },
});

export default userSlice.reducer;
