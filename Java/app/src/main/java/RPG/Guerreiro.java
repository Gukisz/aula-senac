package RPG;

public class Guerreiro implements Personagem {
    private String nome;
    private int vida;
    private int forca;
    private int agilidade;

    public Guerreiro(String nome, int vida, int forca, int agilidade) {
        this.nome = nome;
        this.vida = 30;
        this.forca = forca;
        this.agilidade = agilidade;
    }

    @Override
    public void atacar(Monstro monstro) {
        int dano = Dados.rolar(6) + forca;
        System.out.println(nome + " ataca com sua espada e causa " + dano + " de dano!");
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
