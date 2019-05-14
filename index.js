var Severity;
(function (Severity) {
    Severity["critical"] = "critical";
    Severity["high"] = "high";
    Severity["medium"] = "medium";
    Severity["low"] = "low";
})(Severity || (Severity = {}));
var state = [
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
for (var x in state) {
    addEventItem(state[x]);
}
function addEventItem(item) {
    var el = document.createElement("li");
    el.textContent = item.name;
    el.classList.add(item.severity);
    document.getElementById("eventList").appendChild(el);
}
var form = document.getElementById("addForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var severityInput = document.getElementById("severity");
    var eventNameInput = document.getElementsByName("eventName")[0];
    var newItem = {
        name: eventNameInput.value,
        id: Math.random(),
        severity: severityInput.options[severityInput.selectedIndex].text
    };
    state.push(newItem);
    addEventItem(newItem);
    e.target.reset();
});
