package RPG;

public class Monstro {
    private String nome;
    private int vida;

    public Monstro(String nome) {
        this.nome = nome;
        this.vida = Dados.rolar(5) + 5; // 1d5 + 5
    }

    public String getNome() {
        return nome;
    }

    public int getVida() {
        return vida;
    }

    public void receberDano(int dano) {
        vida -= dano;
        if (vida < 0) vida = 0;
        System.out.println(nome + " recebeu " + dano + " de dano. Vida restante: " + vida);
    }

    public boolean estaVivo() {
        return vida > 0;
    }
}
