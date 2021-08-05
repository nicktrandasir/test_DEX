import {createSlice} from "@reduxjs/toolkit"
import {ILogin} from "./authorizationTypes";
import {setLogin, setRegister} from "./authorizationThunk";


const initialState: ILogin = {
    isAuth: localStorage.isAuth || false,
    name: localStorage.name || null,
    error: null,
    isFetching: false,
    token: localStorage.token || null,
    avatarUrl: localStorage.avatarUrl || null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isAuth = false;
            state.name = "";
            state.avatarUrl = "";
            localStorage.clear();
        }
    },
    extraReducers: {
        [setRegister.pending.type]: (state) => {
            state.isFetching = true;
        },
        [setRegister.fulfilled.type]: (state, {payload}: any) => {
            alert('ok');
            state.isAuth = true
            state.name = payload.name
            state.avatarUrl = payload.avatarUrl
            state.token = payload.token

            localStorage.isAuth = true
            localStorage.token = payload.token
            localStorage.name = payload.name
            localStorage.avatarUrl = payload.avatarUrl
        },
        [setRegister.rejected.type]: (state) => {
            state.isFetching = false;
            state.error = "Network error!"
        },




        [setLogin.pending.type]: (state) => {
            state.isFetching = true;
        },
        [setLogin.fulfilled.type]: (state, {payload}: any) => {
            state.isAuth = true
            state.name = payload.name
            state.avatarUrl = payload.avatarUrl
            state.token = payload.token

            localStorage.isAuth = true
            localStorage.token = payload.token
            localStorage.name = payload.name
            localStorage.avatarUrl = payload.avatarUrl
        },
        [setLogin.rejected.type]: (state) => {
            state.isFetching = false;
            state.error = "Network error!"
        }
    }
})

export default authSlice.reducer;
export const {logout} = authSlice.actions;
