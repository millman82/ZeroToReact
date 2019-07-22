import * as React from "react";
import NotificationContext from "./NotificationContext";
import { INotificationItem } from "../../types";
import { INotificationContext } from "./types";

const NotificationContextProvider: React.FunctionComponent = ({ children }) => {
  const [notifications, setNotifications] = React.useState<INotificationItem[]>([]);

  let context: INotificationContext = {
    notifications,
    add: (item) => {
      setNotifications(prevState => [...prevState, item]);
    },
    remove: (item) => {
      setNotifications(prevState => prevState.filter(x => x.id !== item.id))
    }
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
