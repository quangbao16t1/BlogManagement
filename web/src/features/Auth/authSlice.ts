import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import authApi from 'api/auth'
import userApi from 'api/user';
import { AuthState, CurrentUser, initialState } from 'types/auth.type'
import { AppThunk, RootState } from '../../app/store';

export const register = (data: any): AppThunk => async (dispatch) => {
    try {
        const response = await authApi.register(data);
        dispatch(setRegister(response.data));
        console.log(response.data);
    } catch (error: any) {
        console.log(error)
    }
}

export const login = (data: any): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const respone = await authApi.login(data);
        await dispatch(setAuthSuccess(respone.User))
    } catch (error: any) {
        dispatch(setAuthFailed(error))
    } finally {
        dispatch(setLoading(false))
    }
}

// export const logout = (): AppThunk => async (dispatch) => {
//     try {
//         dispatch(setLogOut())
//     }catch (error: any) {
//         dispatch(setAuthFailed(error))
//     } finally {
//         dispatch(setLoading(false))
//     }
// }

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setAuthSuccess: (state, action: PayloadAction<CurrentUser>) => {
            state.currentUser = action.payload;
            state.isAuth = true
        },
        setLogOut: (state) => {
            state.isAuth = false
            state.currentUser = undefined
        },
        setAuthFailed: (state, action: PayloadAction<AuthState>) => {
            state.error = action.payload.error
            state.isAuth = false
        },
        setRegister: (state, action: PayloadAction<CurrentUser>) => {
            state.currentUser = action.payload;
        }
    },
})

export const { setAuthSuccess, setLogOut, setLoading, setAuthFailed, setRegister } = authSlice.actions

export const authSelector = (state: RootState) => state.auth

export default authSlice.reducer;