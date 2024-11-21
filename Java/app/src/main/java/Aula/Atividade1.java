package Aula;

import java.util.Scanner;

public class Atividade1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite seu nome: ");
        String meuNome = sc.nextLine();

        System.out.print("Digite sua idade: ");
        int minhaIdade = sc.nextInt();

        System.out.print("Digite sua altura (em metros): ");
        double minhaAltura = sc.nextDouble();

        System.out.print("Você é aluno? (true/false): ");
        boolean souAluno = sc.nextBoolean();

        String mensagem = String.format(
                "Meu nome é %s \nTenho %d anos \nMinha altura é: %.2f metros \nSou aluno: %b.",
                meuNome, minhaIdade, minhaAltura, souAluno);

        System.out.println(mensagem);
        sc.close();
    }
}