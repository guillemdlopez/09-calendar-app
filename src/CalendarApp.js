import React from "react";
// el provider de redux se va a encargar de proveer la información del store a todos los componentes hijos
import { Provider } from "react-redux";
import { store } from "./store/store";

import AppRouter from "./router/AppRouter";

const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default CalendarApp;
