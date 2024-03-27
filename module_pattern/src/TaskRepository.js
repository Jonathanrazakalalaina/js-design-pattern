var TaskRepository = function() {
    //private variables
    var items = {};
    var instance = null

    var add = function(task) {
        items[task.name] = task;
    }

    var remove = function(task) {
        items[task.name] = null;
    }

    var getAll = function() {
        console.log(items);
        return items
    }

    var getInstance = function() {
        if (!instance) {
            console.log("instance created");
            instance = this;
        }
        console.log("instance returned");
        return instance;
    }

    // revealing pattern

    return {
        add: add,
        remove: remove,
        getAll: getAll,
        instance: getInstance
    }
}

module.exports = TaskRepository;