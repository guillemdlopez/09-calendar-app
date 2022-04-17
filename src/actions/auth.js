import { types } from "../types/types";

export const login = (uid, name, email) => ({
    type: types.loginUser,
    payload: {
        uid,
        name,
        email
    }
})

export const logout = () => ({
    type: types.logout
})