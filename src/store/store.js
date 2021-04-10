import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";

// es una verificación: si existen las herramientas las va a configurar y si no, pues no las configura.
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// el Middleware que utilizamos es thunk (para poder realizar acciones asíncronas)
