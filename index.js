var critical = "critical";
var high = "high";
var medium = "medium";
var low = "low";
var state = [
    {
        eventName: "Critical Condition",
        id: Math.random(),
        severity: critical
    },
    {
        eventName: "Medium Condition",
        id: Math.random(),
        severity: medium
    }
];
for (var x in state) {
    addEventItem(state[x]);
}
function addEventItem(item) {
    var el = document.createElement("li");
    el.textContent = item.eventName;
    el.classList.add(item.severity);
    document.getElementById("eventList").appendChild(el);
}
var form = document.getElementById("addForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var severityInput = document.getElementById("severity");
    var eventNameInput = document.getElementsByName("eventName")[0];
    var newItem = {
        eventName: eventNameInput.value,
        id: Math.random(),
        severity: severityInput.options[severityInput.selectedIndex].value
    };
    state.push(newItem);
    addEventItem(newItem);
    e.target.reset();
});
