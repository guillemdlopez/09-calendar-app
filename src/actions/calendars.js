import { types } from "../types/types";

export const createNewCalendar = (calendar) => ({
    type: types.calendarsAddNew,
    payload: calendar
})