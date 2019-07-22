import { INotificationItem } from "../../types";

export interface INotificationContext {
  add(item: INotificationItem): void;
  notifications: Array<INotificationItem>;
  remove(item: INotificationItem): void;
}
