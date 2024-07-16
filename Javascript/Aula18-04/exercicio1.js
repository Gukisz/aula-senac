const person = {
    name: "Vitor Hugo", 
    nickname: ["Vitinho", "Vitão", "Vit"]
 };
 
 function print(object) {
    const { name, nickname } = object;
    const nicknameString = nickname.join(", ").replace(/,([^,]*)$/, ' ou$1');
    console.log(`"Eu sou ${name}, mas pode me chamar de: ${nicknameString}"`);
 }
 
print(person);
 
//  join() para transformar o array de apelidos em uma única string, separando cada apelido por vírgula.
//  (replace()) para substituir a última vírgula por "ou".