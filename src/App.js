import React from "react";
import "./App.css";
import Todolist from "./components/todolist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Todolist />
      </PersistGate>
    </Provider>
  );
};

export default App;
