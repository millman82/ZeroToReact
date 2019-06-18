import * as React from "react";
import { render } from "react-dom";
import { INotificationItem, Severity } from "./types";
import "./styles.scss";
import { useState } from "react";

// Step 1: Create NotificationItem component
// Step 2: Create NotificationList component
// Step 3: Add INotificationItem[] to NotificationList state
// Step 4: Render NotificationItems from NotificationList state
// Step 5: Create AddNotification component with internal state
// Step 6: Add callback to AddNotification component to update state in NotificationList

interface INotificationItemProps {
    eventName: string;
    severity: Severity;
}

const NotificationItem: React.FunctionComponent<INotificationItemProps> = props => {
    return (
        <div className="NotificationItem">
            <li className={props.severity}>{props.eventName}</li>
        </div>
    );
}

interface INotificationListProps {
    events: INotificationItem[];
    eventListId: string;
}

const NotificationList: React.FunctionComponent<INotificationListProps> = props => {
    return (
        <div className={"notification-list"}>
            <ol id={props.eventListId}>
                {props.events.map(e => (
                    <NotificationItem eventName={e.eventName} key={e.id} severity={e.severity} />
                ))}
            </ol>
        </div>
    );
}

interface IAddNotificationProps {
    onSubmit(event: INotificationItem): void;
}

const AddNotification: React.FunctionComponent<IAddNotificationProps> = props => {
    const [eventName, setEventName] = useState<string>("");
    const [severity, setSeverity] = useState<Severity>(Severity.Critical);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const event: INotificationItem = {
            eventName,
            id: Math.random(),
            severity
        };
        props.onSubmit(event);
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

            <button type="submit">Add</button>
        </form>
    );
}

function App() {
    const [eventList, setEventList] = useState<INotificationItem[]>([])

    const handleSubmit = (e: INotificationItem) => {
        setEventList(prevState => [...prevState, e]);
    };

    return (
        <div className="App">
            <AddNotification onSubmit={handleSubmit} />
            <NotificationList events={eventList} eventListId="eventList" />
        </div>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
