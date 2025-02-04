const CommandController = require("./CommandeController")


var TaskRepository = function () {
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
      items[this.name] = item;
    };

    var get = function(item) {
        return items[item.name];
    }

    return {
      add: add,
      get: get,
      getAll: getAll,
      instance: getInstance(),
    };
  };
  
  const taskRepository = TaskRepository();
  
  var Task = function (name) {
    this.name = name;
    this.completed = false;
  };
  
  Task.prototype.completed = function () {
    this.completed = !this.completed;
  };

  var Controller = {
    add: function(task) {
        const t = new Task(task.name);
        taskRepository.add()
        console.log("requesting to add new task " + t.name);
    },
    get: function(task) {
        taskRepository.get(task)
    }
  }

  var TaskCommand = new CommandController(Controller)

  module.exports = TaskCommand;