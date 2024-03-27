class Task {
    constructor(name) {
        this.name = name
        this.completed = false;
    }
    complete() {
        this.completed = !this.completed;
    }
    toString() {
        if (!this.completed) {
            return console.log("To do : " + this.name);
        }
        console.log("Completed : " + this.name);
    }
}

class EventTask extends Task {
    constructor(name) {
        super(name)
        this.date = new Date();
        this.scheduledDate = this.date.setDate(this.date.getDate() + 2)
    }
    toString() {
        if (this.scheduledDate < new Date()) {
            return console.log("This event is past due");
        }
        console.log("This event is scheduled on : " + new Date(this.scheduledDate).toLocaleDateString());
    }
}

class TodoTask extends Task {
    constructor(name) {
        super(name)
        this.priorities = ["normal", "high"]
        this.priority = 0;
    }
    makeUrgent() {
        this.priority = !this.priority; 
    }
    toString() {
        if (this.priority) {
            return console.log("High priority Task : " + this.name);
        }
        console.log("Task : " + this.name);
    }
}


var task1 = new Task("learn javascript design patterns");
var task2 = new Task("create new class");
var ev = new EventTask("learn javascript design patterns")
var todo = new TodoTask("create new class JS")

task1.toString()
task2.toString()
task1.complete()
task1.toString()
ev.toString()
todo.toString()
todo.makeUrgent()
todo.toString()