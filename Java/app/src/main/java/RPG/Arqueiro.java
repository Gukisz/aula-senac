package RPG;

public class Arqueiro implements Personagem {
    private String nome;
    private int vida;
    private int agilidade;
    private int precisao;
    private int pocoes = 3; 
    
    public Arqueiro(String nome, int agilidade, int precisao, int vida) {
        this.nome = nome;
        this.agilidade = agilidade;
        this.precisao = precisao;
        this.vida = vida;
    }

    @Override
    public void atacar(Monstro monstro) {
        int dano = Dados.rolar(6) + precisao;
        System.out.println(nome + " disparou uma flecha, causando " + dano + " de dano!");
        monstro.receberDano(dano);
    }

    @Override
    public void usarMagia(Monstro monstro) {
        if (vida > 0) {
            int danoEspecial = Dados.rolar(8) + agilidade;
            System.out.println(nome + " usou uma habilidade especial, Flecha Explosiva, causando " + danoEspecial + " de dano!");
            monstro.receberDano(danoEspecial);
        } else {
            System.out.println(nome + " não tem energia suficiente para usar habilidades especiais!");
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
