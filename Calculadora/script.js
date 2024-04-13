const campo1 = document.querySelector("#campo1"); //Selecionando os 5 elementos
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
/*const botao = document.querySelector("#resultado"); */
let resposta = document.querySelector("#resposta");

/*botao.addEventListener("click", calcular); */ 
 
/* Executando o mesmo código, sem o botão, 
fazendo com que a resposta em qualquer um dos campos seja automaticamente calculada*/

seletor.addEventListener("change", calcular); //Escuta o evento que está entre aspas e executa a função
campo1.addEventListener("keyup", calcular);
campo2.addEventListener("keyup", calcular);

function calcular() {

    /*if(campo1.value === "" || campo2.value === "") { //Verifica se um dos campos estão sem valor...
        resposta.classList.add("problema"); //E adiciona a classe que está especificada entre parênteses
        resposta.innerHTML = "Campo vazio";
        setTimeout(() => {
            resposta.classList.remove("problema");
            resposta.innerHTML = "";
        }, 3000);*/
    if (campo1.value != "" && campo2.value != "") { // Se os dois campos forem diferentes de vazio, executa a lógica
        const valor1 = parseInt(campo1.value); //pega o valor que é digitado no campo1(input 1) e armazena na variável valor1
        const valor2 = parseInt(campo2.value);
        const operacao = seletor.value;
        if(operacao === "somar") {
            resposta.innerHTML = valor1 + valor2;
        } else if (operacao === "subtrair") {
            resposta.innerHTML = valor1 - valor2;
        } else if (operacao === "multiplicar") {
            resposta.innerHTML = valor1 * valor2;
        } else if (operacao === "dividir") {
            resposta.innerHTML = valor1 / valor2;
        }

    }

}

