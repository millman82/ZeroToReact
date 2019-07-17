import * as React from "react";
import { INotificationItem, Severity } from "../../types";
const { useState } = React;

export interface IAddNotificationProps {
  onSubmit(event: INotificationItem): void;
}

const AddNotification: React.FunctionComponent<IAddNotificationProps> = props => {
  const [eventName, setEventName] = useState<string>("");
  const [severity, setSeverity] = useState<Severity>(Severity.Critical);

  const handleReset = () => {
    setEventName("");
    setSeverity(Severity.Critical);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const event: INotificationItem = {
      eventName,
      id: Math.random(),
      severity
    };
    props.onSubmit(event);
    handleReset();
  };

  return (
    <form id="addForm" onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input type="text" maxLength={20} name="eventName" value={eventName} onChange={e => setEventName(e.target.value)} />
      </label>

      <label htmlFor="severity">Severity</label>
      <select id="severity" onChange={e => setSeverity(e.target.value as Severity)} value={severity}>
        <option value={Severity.Critical}>Critical</option>
        <option value={Severity.High}>High</option>
        <option value={Severity.Medium}>Medium</option>
        <option value={Severity.Low}>Low</option>
      </select>

      <button onClick={handleReset} type="button">Reset</button>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddNotification;
