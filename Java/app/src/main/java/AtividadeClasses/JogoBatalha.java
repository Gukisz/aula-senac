package AtividadeClasses;

import java.util.Scanner;

public class JogoBatalha {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Escolha o nome do Guerreiro: ");
        Personagem guerreiro = new Guerreiro(scanner.nextLine());

        System.out.print("Escolha o nome do Mago: ");
        Personagem mago = new Mago(scanner.nextLine());

        System.out.print("Escolha o nome do Arqueiro: ");
        Personagem arqueiro = new Arqueiro(scanner.nextLine());

        while (guerreiro.estaVivo() && mago.estaVivo() && arqueiro.estaVivo()) {
            System.out.println("\nEscolha um personagem para controlar:");
            System.out.println("1. " + guerreiro.getNome() + " (Guerreiro)");
            System.out.println("2. " + mago.getNome() + " (Mago)");
            System.out.println("3. " + arqueiro.getNome() + " (Arqueiro)");

            int escolhaPersonagem = scanner.nextInt();
            Personagem personagemAtual = null;

            switch (escolhaPersonagem) {
                case 1 -> personagemAtual = guerreiro;
                case 2 -> personagemAtual = mago;
                case 3 -> personagemAtual = arqueiro;
                default -> System.out.println("Escolha inválida!");
            }

            System.out.println("Escolha um oponente para atacar:");
            System.out.println("1. " + guerreiro.getNome() + " (Guerreiro)");
            System.out.println("2. " + mago.getNome() + " (Mago)");
            System.out.println("3. " + arqueiro.getNome() + " (Arqueiro)");

            int escolhaOponente = scanner.nextInt();
            Personagem oponente = null;

            switch (escolhaOponente) {
                case 1 -> oponente = guerreiro;
                case 2 -> oponente = mago;
                case 3 -> oponente = arqueiro;
                default -> System.out.println("Escolha inválida!");
            }

            if (personagemAtual != null && oponente != null && personagemAtual != oponente) {
                if (personagemAtual instanceof Mago) {
                    System.out.println("1. Ataque Normal");
                    System.out.println("2. Lançar Feitiço");
                    int escolhaAtaque = scanner.nextInt();
                    if (escolhaAtaque == 2) {
                        ((Mago) personagemAtual).lancarFeitico(oponente);
                    } else {
                        personagemAtual.atacar(oponente);
                    }
                } else {
                    personagemAtual.atacar(oponente);
                }
                System.out.println(oponente.getNome() + " tem agora " + oponente.getVida() + " de vida.");
            } else {
                System.out.println("Ação inválida, escolha novamente!");
            }

            if (!oponente.estaVivo()) {
                System.out.println(oponente.getNome() + " foi derrotado!");
                break;
            }
        }   

        scanner.close();
    }
}
