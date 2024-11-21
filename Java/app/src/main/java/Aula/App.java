package Aula;

public class App {
    public static void main(String[] args) {
        String meuNome = "Gustavo";
        char minhaInicial = 'G';
        int minhaIdade = 19;
        double minhaAltura = 1.60;
        boolean souAluno = true;

        String mensagem = String.format(
                "Meu nome é %s \nMinha inicial é: %c \nTenho %d anos \nminha altura é: %.2f metros \nsou aluno: %b.",
                meuNome, minhaInicial, minhaIdade, minhaAltura, souAluno);

        System.out.println(mensagem);
    }
}
