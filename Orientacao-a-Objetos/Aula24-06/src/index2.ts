class Chef{
    name: string
    age: number
    exp_year: number

    constructor(name: string, age: number, exp_year: number){
        this.name = name
        this.age = age
        this.exp_year = exp_year
    }
}

class Restaurant{
    chef: Chef
    name_res: string
    adress_res: string
    num_adress: number

    constructor(chef: Chef, name_res: string, adress_res: string, num_adress: number){
        this.chef = chef
        this.name_res = name_res
        this.adress_res = adress_res
        this.num_adress = num_adress
    }

    presentationRest(): void{
        console.log(`Olá, somos o restaurante ${this.name_res} e nosso chef é ${this.chef.name}`)   
    }
}

let cook = new Chef("Rogerio", 52, 32)

let restaurant = new Restaurant(cook, "Prato Fino", "Rua dos Restaurantes", 100)

restaurant.presentationRest()