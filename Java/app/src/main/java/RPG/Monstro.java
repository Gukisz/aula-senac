package RPG;

public class Monstro {
    private String nome;
    private int vida;
    private int dano;

    public Monstro(String nome) {
        this.nome = nome;
        this.vida = 25;  // Vida fixa
        this.dano = Dados.rolar(6) + 4;  // Dano aleatório entre 5 e 10 (rolando 1d6 e somando 4)
    }

    public String getNome() {
        return nome;
    }

    public int getVida() {
        return vida;
    }

    public int getDano() {
        return dano;
    }

    public void receberDano(int dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }

    public boolean estaVivo() {
        return vida > 0;
    }
}
