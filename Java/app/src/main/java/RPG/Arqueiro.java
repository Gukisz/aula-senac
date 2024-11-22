package RPG;

public class Arqueiro implements Personagem {
    private String nome;
    private int vida;
    private int agilidade;
    private int destreza;

    public Arqueiro(String nome, int vida, int agilidade, int destreza) {
        this.nome = nome;
        this.vida = 25;
        this.agilidade = agilidade;
        this.destreza = destreza;
    }

    @Override
    public void atacar(Monstro monstro) {
        int dano = Dados.rolar(6) + destreza;
        System.out.println(nome + " ataca com seu arco e causa " + dano + " de dano!");
        monstro.receberDano(dano);
    }

    @Override
    public void usarMagia(Monstro monstro) {
        System.out.println(nome + " não pode usar magia.");
    }

    @Override
    public void receberDano(int dano) {
        vida -= dano;
        if (vida < 0) vida = 0;
        System.out.println(nome + " recebeu " + dano + " de dano. Vida restante: " + vida);
    }

    @Override
    public boolean estaVivo() {
        return vida > 0;
    }

    public int getVida() {
        return vida;
    }
}
