package RPG;

public interface Personagem {
    void atacar(Monstro monstro);
    void usarMagia(Monstro monstro);
    void receberDano(int dano);
    boolean estaVivo();
    int getVida();
}


