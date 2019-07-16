import * as React from "react";
import { render } from "react-dom";
import AddNotification from "./components/AddNotification";
import NotificationList from "./components/NotificationList";
import { INotificationItem } from "./types";

const { useState } = React;

const App: React.FunctionComponent = () => {
  const [eventList, setEventList] = useState<INotificationItem[]>([])

  const handleRemove = (e: INotificationItem) => {
    setEventList(prevState => prevState.filter(x => x.id !== e.id));
  }

  const handleSubmit = (e: INotificationItem) => {
    setEventList(prevState => [...prevState, e]);
  };

  return (
    <div className="App">
      <AddNotification onSubmit={handleSubmit} />
      <NotificationList events={eventList} onRemove={handleRemove} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
