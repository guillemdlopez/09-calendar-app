import moment from "moment";
import { types } from "../types/types";

const initialState = {
  events: [
    {
      id: new Date().getTime(),
      title: "Cumpleaños del jefe",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgcolor: "rgb(0, 123, 255)",
      calendar: "Personal",
      user: {
        _id: "123",
        name: "Guillem",
      },
    },
  ],
  calendars: [{
    name: 'Personal',
    color: '#007bff'
  }],
  activeEvent: null,
  activeCalendars: []
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return { ...state, activeEvent: action.payload };

    case types.eventAddNew:
      return { ...state, events: [...state.events, action.payload] };

    case types.eventUnsetActive:
      return { ...state, activeEvent: null };

    case types.eventUpdate:
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.eventDeleted:
      return {
        // siempre es bueno volver a regresar todo el state de nuevo porque podemos crear un nuevo state
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: null,
      };
    
    case types.calendarsAddNew:
      return {
        ...state,
        calendars: [...state.calendars, { name: action.payload.calendar, color: action.payload.color }]
      }

    case types.activeCalendar:
      return {
        ...state,
        activeCalendars: [...state.activeCalendars, action.payload]
      }

    default:
      return state;
  }
};
