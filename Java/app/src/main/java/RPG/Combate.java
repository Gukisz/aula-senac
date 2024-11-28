package RPG;

import java.util.Scanner;

public class Combate {
    Scanner scanner = new Scanner(System.in);

    public void iniciarCombate(Personagem jogador, Monstro monstro) {
        System.out.println("Você encontrou um " + monstro.getNome() + "!");
        System.out.println(monstro.getNome() + " possui " + monstro.getVida() + " de vida.");

        while (jogador.estaVivo() && monstro.estaVivo()) {
            System.out.println("\nSua vida: " + jogador.getVida());
            System.out.println(monstro.getNome() + " tem " + monstro.getVida() + " de vida.");
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
                    if (jogador instanceof Guerreiro) {
                        ((Guerreiro) jogador).usarPocao();
                    } else if (jogador instanceof Mago) {
                        ((Mago) jogador).usarPocao();
                    } else if (jogador instanceof Arqueiro) {
                        ((Arqueiro) jogador).usarPocao();
                    }
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
                System.out.println(monstro.getNome() + " ataca!");
                int dano = Dados.rolar(6);
                jogador.receberDano(dano);
            }
        }

        if (jogador.estaVivo()) {
            System.out.println("Você derrotou o " + monstro.getNome() + "!");
        } else {
            System.out.println("Você foi derrotado pelo " + monstro.getNome() + "...");
        }
    }

    private boolean fugir(Personagem jogador) {
        int chance = Dados.rolar(10);
        return chance > 6; // 40% de chance de sucesso.
    }
}
