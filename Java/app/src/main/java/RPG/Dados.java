package RPG;

public class Dados {
    public static int rolar(int faces) {
        return (int) (Math.random() * faces) + 1;
    }
}
