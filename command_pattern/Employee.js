const CommandController = require("./CommandeController")

var EmployeeRepository = function () {
    var instance = null;
    var items = {};
  
    var getInstance = function () {
      if (!instance) {
        instance = this;
      }
      return instance;
    };
    var getAll = function () {
      return items;
    };
    var add = function (item) {
      return items[item.last] = item;
    };
    var get = function(item) {
      return items[item.last]
    }
    return {
      add: add,
      get: get,
      getAll: getAll,
      instance: getInstance(),
    };
  };
  
  const employeeRepository = EmployeeRepository();
  
  var Employee = function (first, last) {
    this.first = first;
    this.last = last;
    this.name = last.toUpperCase() + ", " + first;
  };

  Employee.prototype.save = function() {
    console.log("saving " + this.name);
    employeeRepository.add(this);
  }
  
  var Controller = {
    add: function(emp) {
        const {first, last} = emp;
        const employee = new Employee(first, last);
        employeeRepository.add(employee);
        console.log("Add " + last.toUpperCase() + ", " + employee.name);
    },
    get: function(emp) {
        const employee = employeeRepository.get(emp)
        console.log("requesting to get existing employee " + employee.name);
    }
}

const EmployeeCommand = new CommandController(Controller)
  
  module.exports = EmployeeCommand;