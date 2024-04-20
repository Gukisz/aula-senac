let cart = [];

const fruit1 = {
    name: "Maça",
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

addToCart(fruit1);
addToCart(fruit2);
addToCart(fruit3);

console.log(cart);
