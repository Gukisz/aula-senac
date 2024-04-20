let cart = [];

const fruit1 = {
    name: "Maçã",
    availability: true
};

const fruit2 = {
    name: "Banana",
    availability: true
};

const fruit3 = {
    name: "Laranja",
    availability: true
};

function addToCart(fruit) {
    cart.push(fruit);
}

//função adicionada
function toggleFruitAvailability(fruit) {
    fruit.availability = !fruit.availability;
    return fruit;
}

addToCart(fruit1);
addToCart(fruit2);
addToCart(fruit3);

toggleFruitAvailability(fruit2);
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);



