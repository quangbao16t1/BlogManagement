import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authApi from "api/auth";
import { AuthState, CurrentUser, initialState } from 'types/auth.type'
import { AppThunk, RootState } from '../../app/store';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const register = createAsyncThunk(
    "auth/register",
    async (data: any, thunkAPI) => {
        try {
            const response = await authApi.register(data);
            //   thunkAPI.dispatch(setMessage(response.data.message));
            return { user: response.data.result };
        } catch (error) {
            //   thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async (data: any, thunkAPI) => {
        try {
            const result = await authApi.login(data);
            return { user: result };
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const logout = createAsyncThunk("auth/logout", async () => {
    await authApi.logout();
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.isAuth = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.currentUser = action.payload.user;
                state.isAuth = true
            })
            .addCase(login.rejected, (state, action) => {
                state.error = "Cant login"
                state.isAuth = false
            })
            .addCase(register.fulfilled, (state, action) => {
                state.currentUser = action.payload.user
            })
            .addCase(register.rejected, (state, action) => {
                state.error = "Email does not exits!!"
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false
            })
    },
});

export const authSelector = (state: RootState) => state.auth

export default authSlice.reducer;