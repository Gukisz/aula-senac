function print(array) {
    let menssage = ""; 
    for (let word of array){
        menssage += word + " ";
    }
    console.log(menssage);  
}

const word = ["Oi", "sumido", "tudo", "bem?", "Saudades"];
print(word);