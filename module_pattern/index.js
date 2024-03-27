var TaskRepository = require('./src/TaskRepository.js')
var Task = require('./src/Task.js')



var task1 = new Task("learn javascript design patterns");
var task2 = new Task ("pay bills")

var taskRepository = new TaskRepository()
taskRepository.instance()
taskRepository.instance()
