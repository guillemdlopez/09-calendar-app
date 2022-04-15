import { types } from "../types/types";

export const authReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case types.login:
            return {
                uid: payload.uid,
                name: payload.name,
                email: payload.email
            };
    
        default:
            return state;
    }
}