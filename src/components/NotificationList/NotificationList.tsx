import * as React from "react";
import { INotificationItem } from "../../types";
import NotificationItem from "../NotificationItem";

export interface INotificationListProps {
  events: INotificationItem[];
  onRemove: (item: INotificationItem) => void;
}

const NotificationList: React.FunctionComponent<INotificationListProps> = props => {
  return (
    <ol className="eventsContainer">
      {props.events.map(e => (
        <NotificationItem event={e} key={e.id} onRemove={() => props.onRemove(e)} />
      ))}
    </ol>
  );
}

export default NotificationList;
