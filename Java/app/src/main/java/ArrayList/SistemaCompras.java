import java.util.ArrayList;
import java.util.Scanner;


abstract class Produto {
    private String nome;
    private double preco;

    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    @Override // Para sobrescrever
    public String toString() {
        return nome + " - R$" + preco;
    }
}

// Subclasses de Produto
class Livro extends Produto {
    public Livro(String nome, double preco) {
        super(nome, preco);
    }
}

class Eletronico extends Produto {
    public Eletronico(String nome, double preco) {
        super(nome, preco);
    }
}

class Roupa extends Produto {
    public Roupa(String nome, double preco) {
        super(nome, preco);
    }
}

class Alimento extends Produto {
    public Alimento(String nome, double preco) {
        super(nome, preco);
    }
}

class Brinquedo extends Produto {
    public Brinquedo(String nome, double preco) {
        super(nome, preco);
    }
}

// Classe principal do sistema de compras
public class SistemaCompras {
    private static ArrayList<Produto> carrinho = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int opcao;
        do {
            exibirMenu();
            opcao = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

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
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        } while (opcao != 5);
    }

    private static void exibirMenu() {
        System.out.println("\n--- Menu ---");
        System.out.println("1. Adicionar produto ao carrinho");
        System.out.println("2. Remover produto do carrinho");
        System.out.println("3. Exibir carrinho");
        System.out.println("4. Realizar pagamento");
        System.out.println("5. Sair");
        System.out.print("Escolha uma opção: ");
    }

    private static void adicionarProduto() {
        System.out.println("\n--- Adicionar Produto ---");
        System.out.println("Escolha o tipo de produto:");
        System.out.println("1. Livro");
        System.out.println("2. Eletrônico");
        System.out.println("3. Roupa");
        System.out.println("4. Alimento");
        System.out.println("5. Brinquedo");
        System.out.print("Escolha uma opção: ");
        int tipo = scanner.nextInt();
        scanner.nextLine(); // Consumir a nova linha

        System.out.print("Digite o nome do produto: ");
        String nome = scanner.nextLine();
        System.out.print("Digite o preço do produto: ");
        double preco = scanner.nextDouble();
        scanner.nextLine(); // Consumir a nova linha

        Produto produto = null;
        switch (tipo) {
            case 1:
                produto = new Livro(nome, preco);
                break;
            case 2:
                produto = new Eletronico(nome, preco);
                break;
            case 3:
                produto = new Roupa(nome, preco);
                break;
            case 4:
                produto = new Alimento(nome, preco);
                break;
            case 5:
                produto = new Brinquedo(nome, preco);
                break;
            default:
                System.out.println("Tipo de produto inválido.");
                return;
        }

        carrinho.add(produto);
        System.out.println("Produto adicionado ao carrinho!");
    }

    private static void removerProduto() {
        System.out.println("\n--- Remover Produto ---");
        if (carrinho.isEmpty()) {
            System.out.println("O carrinho está vazio.");
            return;
        }

        exibirCarrinho();
        System.out.print("Digite o número do produto que deseja remover: ");
        int indice = scanner.nextInt();
        scanner.nextLine(); // Consumir a nova linha

        if (indice >= 1 && indice <= carrinho.size()) {
            Produto produtoRemovido = carrinho.remove(indice - 1);
            System.out.println("Produto removido: " + produtoRemovido.getNome());
        } else {
            System.out.println("Número de produto inválido.");
        }
    }

    private static void exibirCarrinho() {
        System.out.println("\n--- Carrinho de Compras ---");
        if (carrinho.isEmpty()) {
            System.out.println("O carrinho está vazio.");
        } else {
            for (int i = 0; i < carrinho.size(); i++) {
                System.out.println((i + 1) + ". " + carrinho.get(i));
            }
        }
    }

    private static void realizarPagamento() {
        System.out.println("\n--- Realizar Pagamento ---");
        if (carrinho.isEmpty()) {
            System.out.println("O carrinho está vazio. Nada a pagar.");
            return;
        }

        exibirCarrinho();
        double total = 0;
        for (Produto produto : carrinho) {
            total += produto.getPreco();
        }

        System.out.println("Total a pagar: R$" + total);
        System.out.print("Confirmar pagamento? (s/n): ");
        String confirmacao = scanner.nextLine();

        if (confirmacao.equalsIgnoreCase("s")) {
            carrinho.clear();
            System.out.println("Pagamento realizado com sucesso! O carrinho foi esvaziado.");
        } else {
            System.out.println("Pagamento cancelado.");
        }
    }
}