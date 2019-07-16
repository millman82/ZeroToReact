import * as React from "react";
import { INotificationItem } from "../../types";
import NotificationItem from "../NotificationItem";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  eventsContainer: {
    backgroundColor: "whitesmoke",
    border: "1px dashed black"
  }
});

export interface INotificationListProps extends WithStyles<typeof styles> {
  events: INotificationItem[];
  onRemove: (item: INotificationItem) => void;
}

const NotificationList: React.FunctionComponent<INotificationListProps> = props => {
  return (
    <ol className={props.classes.eventsContainer}>
      {props.events.map(e => (
        <NotificationItem event={e} key={e.id} onRemove={() => props.onRemove(e)} />
      ))}
    </ol>
  );
}

export default withStyles(styles)(NotificationList);
