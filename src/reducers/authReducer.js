import { types } from "../types/types";

export const authReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case types.loginUser:
            return {
                uid: payload.uid,
                name: payload.name,
                email: payload.email
            };
        
        case types.logout:
            return {};
    
        default:
            return state;
    }
}