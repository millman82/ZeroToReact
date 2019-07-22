import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import NotificationItem from "../NotificationItem";
import NotificationContext from "../../contexts/notificationContext/NotificationContext";

const styles = (theme: Theme) => createStyles({
  eventsContainer: {
    backgroundColor: "whitesmoke",
    border: "1px dashed black"
  }
});

export interface INotificationListProps extends WithStyles<typeof styles> {
}

const NotificationList: React.FunctionComponent<INotificationListProps> = props => {
  return (
    <ol className={props.classes.eventsContainer}>
      <NotificationContext.Consumer>
        { (context) =>
          context.notifications.map(e => (
            <NotificationItem event={e} key={e.id} onRemove={() => context.remove(e)} />
          ))
        }
      </NotificationContext.Consumer>
    </ol>
  );
}

export default withStyles(styles)(NotificationList);
