package RPG;

public class Mago implements Personagem {
    private String nome;
    private int vida;
    private int magia;
    private int inteligencia;

    public Mago(String nome, int vida, int magia, int inteligencia) {
        this.nome = nome;
        this.vida = 30;
        this.magia = magia;
        this.inteligencia = inteligencia;
    }

    @Override
    public void atacar(Monstro monstro) {
        int dano = Dados.rolar(6) + inteligencia;
        System.out.println(nome + " ataca com um feitiço e causa " + dano + " de dano!");
        monstro.receberDano(dano);
    }

    @Override
    public void usarMagia(Monstro monstro) {
        if (magia >= 3) {
            int danoMagico = Dados.rolar(10) + inteligencia;
            System.out.println(nome + " usou um feitiço poderoso causando " + danoMagico + " de dano mágico!");
            monstro.receberDano(danoMagico);
            magia -= 3;
            System.out.println(nome + " agora tem " + magia + " de mana restante.");
        } else {
            System.out.println(nome + " não tem mana suficiente para usar magia.");
        }
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
