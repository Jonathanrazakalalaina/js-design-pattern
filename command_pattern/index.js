const TaskCommand = require("./Task");
const EmployeeCommand = require("./Employee");

// execute
TaskCommand.execute("add", {name: "Learn js Design Patterns"})
EmployeeCommand.execute("add", {first: "Jonathan", last: "Razakalalaina"});
EmployeeCommand.execute("get", {first: "Jonathan", last: "Razakalalaina"});