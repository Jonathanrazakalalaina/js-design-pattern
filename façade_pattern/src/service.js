const DrinkFactory = require("./DrinkFactory.js");

var drinkFactory = new DrinkFactory()

var service = function() {
    var instance = null;

    var checkout = function(drink) {
        console.log("checkout " + drink.price);
    }

    var prepareOrder = function(...args) {
        let drink = drinkFactory.create(...args);
        checkout(drink);
        drink.toString();
        return drink;
    }

    var init = function() {
        if (!instance) {
            instance = this
        }
        return instance;
    }

    return {
        makeDrink: prepareOrder,
        instance: init
    }
}

module.exports = service()