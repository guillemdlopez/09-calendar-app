import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";

import { messages } from "../../helpers/calendar-messages-es";
import { uiOpenModal } from "../../actions/ui";
import { eventSetActive, eventUnsetActive } from "../../actions/events";
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";
import AddNewFab from "../ui/AddNewFab";
import DeleteEventFab from "../ui/DeleteEventFab";

moment.locale("es");

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = (e) => {
    const { start, end } = e
    console.log(start, end);
    setStartDate(start)
    setEndDate(end)
    dispatch(eventUnsetActive());
    dispatch(uiOpenModal());
  };

  // se va a disparar con ciertos argumentos
  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: '100%' }}
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <AddNewFab />
      {activeEvent && <DeleteEventFab activeEvent={activeEvent} />}
      <CalendarModal startDate={startDate} endDate={endDate}/>
    </div>
  );
};

export default CalendarScreen;
