import * as React from "react";
import { render } from "react-dom";
import AddNotification from "./components/AddNotification";
import NotificationList from "./components/NotificationList";
import { INotificationItem } from "./types";
import NotificationContextProvider from "./contexts/notificationContext/NotificationContextProvider";

const { useState } = React;

const App: React.FunctionComponent = () => {
  return (
    <NotificationContextProvider>
      <div className="App">
        <AddNotification />
        <NotificationList />
      </div>
    </NotificationContextProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
