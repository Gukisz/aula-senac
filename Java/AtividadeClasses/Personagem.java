package AtividadeClasses;

public class Personagem {
    protected String nome;
    protected int vida;
    protected int ataque;

    public Personagem(String nome, int vida, int ataque) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
    }

    public void atacar(Personagem oponente) {
        oponente.vida -= this.ataque;
        System.out.println(this.nome + " atacou " + oponente.nome + " causando " + this.ataque + " de dano.");
    }

    public boolean estaVivo() {
        return this.vida > 0;
    }

    public String getNome() {
        return this.nome;
    }

    public int getVida() {
        return this.vida;
    }
}
