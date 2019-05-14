enum Severity {
    critical = "critical",
    high = "high",
    medium = "medium",
    low = "low"
}

interface INotificationItem {
    name: string;
    id: number;
    severity: Severity;
}

const state: INotificationItem[] = [
    {
        name: "Critical Condition",
        id: Math.random(),
        severity: Severity.critical
    },
    {
        name: "Medium Condition",
        id: Math.random(),
        severity: Severity.medium
    }
];

for (const x in state) {
    addEventItem(state[x]);
}

function addEventItem(item: INotificationItem) {
    const el = document.createElement("li");
    el.textContent = item.name;
    el.classList.add(item.severity);
    document.getElementById("eventList").appendChild(el);
}

const form = document.getElementById("addForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const severityInput = document.getElementById("severity") as HTMLSelectElement;
    const eventNameInput = document.getElementsByName("eventName")[0] as HTMLInputElement;
    const newItem: INotificationItem = {
        name: eventNameInput.value,
        id: Math.random(),
        severity: severityInput.options[severityInput.selectedIndex].text as Severity
    };
    state.push(newItem);
    addEventItem(newItem);
    (e.target as HTMLFormElement).reset();
});