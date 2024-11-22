package RPG;

public class Historia {
    public void apresentarCenario() {
        System.out.println("Você está em uma encruzilhada. Escolha o caminho:");
        System.out.println("1) Ir para a esquerda.");
        System.out.println("2) Ir para a direita.");
    }

    public void avancar(int opcaoEscolhida) {
        switch (opcaoEscolhida) {
            case 1:
                System.out.println("Você seguiu para a esquerda e encontrou um monstro!");
                break;
            case 2:
                System.out.println("Você seguiu para a direita e encontrou um tesouro!");
                break;
            default:
                System.out.println("Opção inválida!");
        }
    }
}
