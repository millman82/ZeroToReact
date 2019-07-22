import * as React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import { INotificationItem, Severity } from "../../types";

const styles = (theme: Theme) => createStyles({
  critical: {
    color: "red"
  },
  high: {
    color: "orange"
  },
  medium: {
    color: "yellow"
  },
  low: {
    color: "lightBlue"
  }
});

function getSeverityClass(severity: string, classes: Record<"critical" | "medium" | "high" | "low", string>): string {
  switch(severity) {
    case Severity.Critical:
      return classes.critical;
    case Severity.High:
      return classes.high;
    case Severity.Medium:
      return classes.medium;
    default:
      return classes.low;
  }
}

export interface INotificationItemProps extends WithStyles<typeof styles> {
  event: INotificationItem;
  onRemove?: () => void;
}

const NotificationItem: React.FunctionComponent<INotificationItemProps> = props => {
  return (
    <li className={getSeverityClass(props.event.severity, props.classes)}>
      {typeof props.onRemove === "function" && (
        <button onClick={props.onRemove} title="Remove" type="button">X</button>
      )}
      {props.event.eventName}
    </li>
  );
}

export default withStyles(styles)(NotificationItem);
