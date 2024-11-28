package RPG;

public class Mago implements Personagem {
    private String nome;
    private int vida;
    private int mana;
    private int inteligencia;
    private int pocoes = 3; 

    public Mago(String nome, int inteligencia, int mana, int vida) {
        this.nome = nome;
        this.inteligencia = inteligencia;
        this.mana = mana;
        this.vida = vida;
    }

    @Override
    public void atacar(Monstro monstro) {
        int dano = Dados.rolar(4) + inteligencia;
        System.out.println(nome + " lançou um feitiço básico, causando " + dano + " de dano!");
        monstro.receberDano(dano);
    }

    @Override
    public void usarMagia(Monstro monstro) {
        if (mana >= 3) {
            int danoEspecial = Dados.rolar(8) + inteligencia;
            System.out.println(nome + " usou uma magia poderosa, causando " + danoEspecial + " de dano!");
            monstro.receberDano(danoEspecial);
            mana -= 3;
            System.out.println(nome + " agora tem " + mana + " de mana.");
        } else {
            System.out.println(nome + " não tem mana suficiente para usar magia!");
        }
    }

    @Override
    public void receberDano(int dano) {
        vida -= dano;
        System.out.println(nome + " recebeu " + dano + " de dano. Vida restante: " + vida);
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
