import * as React from "react";
import { INotificationItem } from "../../types";

export interface INotificationItemProps {
  event: INotificationItem;
  onRemove?: () => void;
}

const NotificationItem: React.FunctionComponent<INotificationItemProps> = props => {
  return (
    <li className={props.event.severity}>
      {typeof props.onRemove === "function" && (
        <button onClick={props.onRemove} title="Remove" type="button">X</button>
      )}
      {props.event.eventName}
    </li>
  );
}

export default NotificationItem;
