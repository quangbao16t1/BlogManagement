import { register } from './../features/Auth/authSlice';
export interface AuthError {
    message: string
}

export interface AuthState {
    isAuth: boolean
    currentUser?: CurrentUser
    isLoading: boolean
    error: AuthError
}

export interface CurrentUser {
    id: number
    fisrtName: string
    lastName: string
    email: string
    gender: string
    address: string
    phoneNumber: string
    roleId: number
}

export const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: {message: 'An Error occurred'},
}
