package AtividadeClasses;

public class Mago extends Personagem {
    public Mago(String nome) {
        super(nome, 80, 25);
    }

    public void lancarFeitico(Personagem oponente) {
        int danoFeitico = this.ataque * 2;
        oponente.vida -= danoFeitico;
        System.out.println(this.nome + " lançou um feitiço em " + oponente.nome + " causando " + danoFeitico + " de dano.");
    }
}
