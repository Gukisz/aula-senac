package RPG;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Jogo {
    private static Scanner scanner = new Scanner(System.in);
    private static Random random = new Random();

    public static void main(String[] args) {
        System.out.println("Bem-vindo ao mundo de aventuras!");
        System.out.println("Você é um herói em um mundo mágico e sombrio, pronto para embarcar em uma jornada cheia de perigos.");
        
        System.out.print("Digite o nome do seu personagem: ");
        String nome = scanner.nextLine();

        System.out.println("Escolha sua classe:");
        System.out.println("1) Guerreiro");
        System.out.println("2) Mago");
        System.out.println("3) Arqueiro");

        int escolhaClasse = scanner.nextInt();
        Personagem jogador = null; 

        switch (escolhaClasse) {
            case 1:
                jogador = new Guerreiro(nome, Dados.rolar(6), Dados.rolar(12), Dados.rolar(10) + 10);
                break;
            case 2:
                jogador = new Mago(nome, Dados.rolar(4), Dados.rolar(10), Dados.rolar(10) + 10);
                break;
            case 3:
                jogador = new Arqueiro(nome, Dados.rolar(6), Dados.rolar(10), Dados.rolar(10) + 10);
                break;
            default:
                System.out.println("Opção inválida. Guerreiro selecionado por padrão.");
                jogador = new Guerreiro(nome, Dados.rolar(6), Dados.rolar(12), Dados.rolar(10) + 10);
        }

        System.out.println("\nSua jornada começa na pequena aldeia de Eldoria, rodeada por vastas florestas e montanhas sombrias.");
        System.out.println("Você é um aventureiro corajoso, pronto para enfrentar os desafios que surgirem em seu caminho.");
        
        explorarOuDescansar(jogador);
    }

    private static void explorarOuDescansar(Personagem jogador) {
        System.out.println("\nVocê tem duas opções:");
        System.out.println("1) Explorar a floresta em busca de aventuras.");
        System.out.println("2) Descansar e recuperar suas forças.");

        int escolha = scanner.nextInt();

        switch (escolha) {
            case 1:
                encontrarMonstro(jogador);
                break;
            case 2:
                descansar(jogador);
                break;
            default:
                System.out.println("Opção inválida. Escolhendo descansar por padrão.");
                descansar(jogador);
                break;
        }
    }

    private static void descansar(Personagem jogador) {
        System.out.println("\nVocê decide descansar em uma clareira da floresta.");
        System.out.println("Após uma boa noite de sono, você se sente revigorado e pronto para mais desafios.");

        int vidaRestaurada = Dados.rolar(6);
        jogador.receberDano(-vidaRestaurada);  // Recupera vida negativa
        System.out.println("Você recuperou " + vidaRestaurada + " de vida.");

        explorarOuDescansar(jogador);
    }

    private static void encontrarMonstro(Personagem jogador) {
        System.out.println("\nEnquanto você explora a floresta, você se depara com um monstro aterrorizante!");
        
        List<Monstro> monstros = new ArrayList<>();
        monstros.add(new Monstro("Lobisomem"));
        monstros.add(new Monstro("Orc"));
        monstros.add(new Monstro("Esqueleto"));

        Monstro monstro = monstros.get(random.nextInt(monstros.size()));

        System.out.println("Você está prestes a enfrentar um " + monstro.getNome() + " com " + monstro.getVida() + " de vida.");

        Combate combate = new Combate();
        combate.iniciarCombate(jogador, monstro);
        
        if (jogador.estaVivo()) {
            System.out.println("\nVocê venceu o " + monstro.getNome() + "!");
            System.out.println("Agora você tem várias opções:");
            System.out.println("1) Continuar explorando a floresta.");
            System.out.println("2) Voltar para a aldeia.");

            int escolha = scanner.nextInt();
            if (escolha == 1) {
                explorarOuDescansar(jogador);
            } else {
                System.out.println("Você decide voltar para a aldeia, onde poderá descansar e se preparar para a próxima aventura.");
            }
        } else {
            System.out.println("Você foi derrotado pelo monstro. Sua aventura chegou ao fim.");
        }
        scanner.close();
    }
}
