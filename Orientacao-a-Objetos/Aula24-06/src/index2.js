var Chef = /** @class */ (function () {
    function Chef(name, age, exp_year) {
        this.name = name;
        this.age = age;
        this.exp_year = exp_year;
    }
    return Chef;
}());
var Restaurant = /** @class */ (function () {
    function Restaurant(chef, name_res, adress_res, num_adress) {
        this.chef = chef;
        this.name_res = name_res;
        this.adress_res = adress_res;
        this.num_adress = num_adress;
    }
    Restaurant.prototype.presentationRest = function () {
        console.log("Ol\u00E1, somos o restaurante ".concat(this.name_res, " e nosso chef \u00E9 ").concat(this.chef.name));
    };
    return Restaurant;
}());
var cook = new Chef("Rogerio", 52, 32);
var restaurant = new Restaurant(cook, "Prato Fino", "Rua dos Restaurantes", 100);
restaurant.presentationRest();
