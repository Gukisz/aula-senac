package RPG;

import java.util.*;

public class Cenario {
    private String descricao;
    private List<String> opcoes;

    public Cenario(String descricao, List<String> opcoes) {
        this.descricao = descricao;
        this.opcoes = opcoes;
    }

    public void exibir() {
        System.out.println("\n" + descricao);
        for (int i = 0; i < opcoes.size(); i++) {
            System.out.println((i + 1) + ") " + opcoes.get(i));
        }
    }

    public int escolherOpcao() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Escolha uma opção: ");
        return scanner.nextInt();
    }
}

