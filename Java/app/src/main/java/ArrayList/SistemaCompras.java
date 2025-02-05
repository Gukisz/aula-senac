import java.util.ArrayList;
import java.util.Scanner;

interface Produto {
    String getNome();
    double getPreco();
    String toString(); // método já existe em Object mas pode ser sobrescrito
}

// classes que estao implementando a interface Produto
class Pizza implements Produto {
    private String nome;
    private double preco;

    public Pizza(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    @Override
    public String getNome() {
        return nome;
    }

    @Override
    public double getPreco() {
        return preco;
    }

    @Override //sobrescreve o metodo da classe pai
    public String toString() {
        return nome + " - R$" + String.format("%.2f", preco);
    }
}

class IPhone implements Produto {
    private String nome;
    private double preco;

    public IPhone(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    @Override
    public String getNome() {
        return nome;
    }

    @Override
    public double getPreco() {
        return preco;
    }

    @Override
    public String toString() {
        return nome + " - R$" + String.format("%.2f", preco);
    }
}

class Camisa implements Produto {
    private String nome;
    private double preco;

    public Camisa(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    @Override
    public String getNome() {
        return nome;
    }

    @Override
    public double getPreco() {
        return preco;
    }

    @Override
    public String toString() {
        return nome + " - R$" + String.format("%.2f", preco);
    }
}

class Chocolate implements Produto {
    private String nome;
    private double preco;

    public Chocolate(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    @Override
    public String getNome() {
        return nome;
    }

    @Override
    public double getPreco() {
        return preco;
    }

    @Override
    public String toString() {
        return nome + " - R$" + String.format("%.2f", preco);
    }
}

class Notebook implements Produto {
    private String nome;
    private double preco;

    public Notebook(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    @Override
    public String getNome() {
        return nome;
    }

    @Override
    public double getPreco() {
        return preco;
    }

    @Override
    public String toString() {
        return nome + " - R$" + String.format("%.2f", preco);
    }
}

public class SistemaCompras {
    private static ArrayList<Produto> carrinho = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int opcao;
        do {
            exibirMenu();
            opcao = scanner.nextInt();
            scanner.nextLine(); // consumir a nova linha

            switch (opcao) {
                case 1:
                    adicionarProduto();
                    break;
                case 2:
                    removerProduto();
                    break;
                case 3:
                    exibirCarrinho();
                    break;
                case 4:
                    realizarPagamento();
                    break;
                case 5:
                    System.out.println("Obrigado por usar o sistema de compras gksEnterprises!");
                    break;
                default:
                    System.out.println("Opção inválida. Por favor, tente novamente.");
            }
        } while (opcao != 5);
    }

    private static void exibirMenu() {
        System.out.println("\r\n" + //
                "   ________        ______      __                       _         \r\n" + //
                "  / ____/ /_______/ ____/___  / /____  _________  _____(_)_______ \r\n" + //
                " / / __/ //_/ ___/ __/ / __ \\/ __/ _ \\/ ___/ __ \\/ ___/ / ___/ _ \\\r\n" + //
                "/ /_/ / ,< (__  ) /___/ / / / /_/  __/ /  / /_/ / /  / (__  )  __/\r\n" + //
                "\\____/_/|_/____/_____/_/ /_/\\__/\\___/_/  / .___/_/  /_/____/\\___/ \r\n" + //
                "                                        /_/                       \r\n" + //
                "");
        System.out.println("\n--- Menu Principal ---");
        System.out.println("1. Adicionar produto ao carrinho");
        System.out.println("2. Remover produto do carrinho");
        System.out.println("3. Ver carrinho");
        System.out.println("4. Finalizar compra");
        System.out.println("5. Sair");
        System.out.print("Escolha uma opção: ");
    }

    private static void adicionarProduto() {
        System.out.println("\n--- Adicionar Produto ---");
        System.out.println("Escolha o tipo de produto:");
        System.out.println("1. Pizza");
        System.out.println("2. iPhone");
        System.out.println("3. Camisa");
        System.out.println("4. Chocolate");
        System.out.println("5. Notebook");
        System.out.print("Escolha uma opção: ");
        int tipo = scanner.nextInt();
        scanner.nextLine(); 

        System.out.print("Digite o nome do produto: ");
        String nome = scanner.nextLine();
        System.out.print("Digite o preço do produto: ");
        double preco = scanner.nextDouble();
        scanner.nextLine(); 

        Produto produto = null;         //null pq nao recebeu nenhum objeto
        switch (tipo) {
            case 1:
                produto = new Pizza(nome, preco);
                break;
            case 2:
                produto = new IPhone(nome, preco);
                break;
            case 3:
                produto = new Camisa(nome, preco);
                break;
            case 4:
                produto = new Chocolate(nome, preco);
                break;
            case 5:
                produto = new Notebook(nome, preco);
                break;
            default:
                System.out.println("Tipo de produto inválido. Nenhum produto foi adicionado.");
                return;
        }

        carrinho.add(produto);
        System.out.println("\n" + produto.getNome() + " foi adicionado ao carrinho!");
    }

    private static void removerProduto() {
        System.out.println("\n--- Remover Produto ---");
        if (carrinho.isEmpty()) {
            System.out.println("Seu carrinho está vazio. Nada para remover.");
            return;
        }

        exibirCarrinho();
        System.out.print("Digite o número do produto que deseja remover: ");
        int indice = scanner.nextInt();
        scanner.nextLine(); 

        if (indice >= 1 && indice <= carrinho.size()) {
            Produto produtoRemovido = carrinho.remove(indice - 1);
            System.out.println("\n" + produtoRemovido.getNome() + " foi removido do carrinho.");
        } else {
            System.out.println("Número de produto inválido. Nenhum produto foi removido.");
        }
    }

    private static void exibirCarrinho() {
        System.out.println("\n--- Seu Carrinho ---");
        if (carrinho.isEmpty()) {
            System.out.println("Seu carrinho está vazio. Que tal adicionar alguns produtos?");
        } else {
            for (int i = 0; i < carrinho.size(); i++) {
                System.out.println((i + 1) + ". " + carrinho.get(i));
            }
        }
    }

    private static void realizarPagamento() {
        System.out.println("\n--- Finalizar Compra ---");
        if (carrinho.isEmpty()) {
            System.out.println("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
            return;
        }

        exibirCarrinho();
        double total = 0;
        for (Produto produto : carrinho) {
            total += produto.getPreco();
        }

        System.out.println("\nTotal a pagar: R$" + String.format("%.2f", total));
        System.out.println("\nEscolha a forma de pagamento:");
        System.out.println("1. PIX");
        System.out.println("2. Débito");
        System.out.println("3. Crédito");
        System.out.println("4. Dinheiro");
        System.out.print("Escolha uma opção: ");
        int formaPagamento = scanner.nextInt();
        scanner.nextLine(); 

        String metodoPagamento = "";
        switch (formaPagamento) {
            case 1:
                metodoPagamento = "PIX";
                break;
            case 2:
                metodoPagamento = "Débito";
                break;
            case 3:
                metodoPagamento = "Crédito";
                break;
            case 4:
                metodoPagamento = "Dinheiro";
                break;
            default:
                System.out.println("Opção inválida. Pagamento cancelado.");
                return;
        }

        System.out.print("Confirmar pagamento com " + metodoPagamento + "? (s/n): ");
        String confirmacao = scanner.nextLine();

        if (confirmacao.equalsIgnoreCase("s")) {
            carrinho.clear();
            System.out.println("\nPagamento realizado com sucesso usando " + metodoPagamento + "! Obrigado por comprar conosco!");
        } else {
            System.out.println("\nPagamento cancelado. Seus itens ainda estão no carrinho.");
        }
    }
}