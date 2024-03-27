const service = require("./src/service")
const instance = service.instance()

const Menu = {
    arabica: "Aarabica coffee",
    americano: "Americano coffee",
    late: "Cafe Late coffee",
    vanilla: "Vanilla Cafe coffee",
    expresso: "Expresso coffee",
    chai: "Chai Late tea",
    breakfastTea: "Breakfast tea",
}

instance.makeDrink(Menu.arabica, "extra", "honey", "half half");