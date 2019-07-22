import { createContext } from "react";
import { INotificationContext } from "./types";
import { INotificationItem } from "../../types";

const NotificationContext = createContext<INotificationContext>({
  add(item: INotificationItem): void {
    throw new Error("Add not implemented");
  },
  notifications: Array<INotificationItem>(),
  remove(item: INotificationItem): void {
    throw new Error("Remove not implemented");
  }
});

export default NotificationContext;
