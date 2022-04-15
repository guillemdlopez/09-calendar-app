import { types } from "../types/types";

export const createNewCalendar = (calendar) => ({
    type: types.calendarsAddNew,
    payload: calendar
})

export const highlightCalendar = (calendar) => ({
    type: types.activeCalendar,
    payload: calendar
})