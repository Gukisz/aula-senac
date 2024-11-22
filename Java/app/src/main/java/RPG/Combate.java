package RPG;

import java.util.Scanner;

public class Combate {
    Scanner scanner = new Scanner(System.in);

    public void iniciarCombate(Personagem jogador, Monstro monstro) {
        System.out.println("Você encontrou um " + monstro.getNome() + "!");
        System.out.println(monstro.getNome() + " possui " + monstro.getVida() + " de vida.");

        while (jogador.estaVivo() && monstro.estaVivo()) {
            System.out.println("\n--- Status ---");
            System.out.println("Sua vida: " + jogador.getVida());
            System.out.println(monstro.getNome() + " tem " + monstro.getVida() + " de vida.");
            System.out.println("---------------");

            System.out.println("\nEscolha sua ação:");
            System.out.println("1) Atacar");
            System.out.println("2) Usar Magia");
            System.out.println("3) Usar Item");
            System.out.println("4) Fugir");

            int escolha = scanner.nextInt();

            switch (escolha) {
                case 1:
                    jogador.atacar(monstro);
                    break;
                case 2:
                    jogador.usarMagia(monstro);
                    break;
                case 3:
                    usarItem(jogador);
                    break;
                case 4:
                    if (fugir(jogador)) {
                        System.out.println("Você fugiu com sucesso!");
                        return;
                    } else {
                        System.out.println("Não foi possível fugir!");
                    }
                    break;
                default:
                    System.out.println("Opção inválida. O turno será perdido!");
            }

            if (monstro.estaVivo()) {
                System.out.println("\n" + monstro.getNome() + " ataca!");
                int dano = monstro.getDano();
                jogador.receberDano(dano);
                System.out.println(monstro.getNome() + " causou " + dano + " de dano!");
            }
        }

        if (jogador.estaVivo()) {
            System.out.println("\nVocê derrotou o " + monstro.getNome() + "!");
        } else {
            System.out.println("\nVocê foi derrotado pelo " + monstro.getNome() + "...");
        }
    }

    private void usarItem(Personagem jogador) {
        System.out.println("Você tenta usar um item...");
        System.out.println("Nenhum item disponível. (Sistema de itens em construção)");
    }

    private boolean fugir(Personagem jogador) {
        int chance = Dados.rolar(10);
        return chance > 6; // 40% de chance de sucesso.
    }
}

