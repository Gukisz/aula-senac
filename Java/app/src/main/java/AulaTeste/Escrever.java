package AulaTeste;

import java.util.Scanner;

public class Escrever {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int numero1, numero2, resultado;
        String nome;

        System.out.println("Digite um numero: ");
        numero1 = sc.nextInt();

        System.out.println("Digite outro numero: ");
        numero2 = sc.nextInt();

        sc.nextLine();
        System.out.println("Digite seu nome: ");
        nome = sc.nextLine();

        resultado = numero1 + numero2;
        String mensagem = String.format("Aqui está o resultado %s: %d + %d é %d", nome, numero1, numero2, resultado);

        System.out.println(mensagem);

        sc.close();
    }
}
