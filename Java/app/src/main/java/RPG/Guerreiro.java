package RPG;

public class Guerreiro implements Personagem {
    private String nome;
    private int vida;
    private int forca;
    private int defesa;
    private int pocoes = 3; 

    public Guerreiro(String nome, int forca, int defesa, int vida) {
        this.nome = nome;
        this.forca = forca;
        this.defesa = defesa;
        this.vida = vida;
    }

    @Override
    public void atacar(Monstro monstro) {
        int dano = Dados.rolar(6) + forca;
        System.out.println(nome + " atacou com sua espada, causando " + dano + " de dano!");
        monstro.receberDano(dano);
    }

    @Override
    public void usarMagia(Monstro monstro) {
        System.out.println(nome + " não possui habilidades mágicas!");
    }

    @Override
    public void receberDano(int dano) {
        int danoRecebido = Math.max(dano - defesa, 0); // Reduz o dano pela defesa
        vida -= danoRecebido;
        System.out.println(nome + " recebeu " + danoRecebido + " de dano. Vida restante: " + vida);
    }

    public void usarPocao() {
        if (pocoes > 0) {
            vida += 5;
            pocoes--;
            System.out.println(nome + " usou uma poção e recuperou 5 pontos de vida! Vida atual: " + vida + ". Poções restantes: " + pocoes);
        } else {
            System.out.println(nome + " não tem mais poções disponíveis!");
        }
    }

    @Override
    public boolean estaVivo() {
        return vida > 0;
    }

    @Override
    public int getVida() {
        return vida;
    }
}
