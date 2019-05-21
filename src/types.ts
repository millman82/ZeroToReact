export enum Severity {
    Critical = "critical",
    High = "high",
    Medium = "medium",
    Low = "low"
}

export interface INotificationItem {
    eventName: string;
    id: number;
    severity: Severity;
}