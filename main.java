public class Pessoa {
    private String nome;
    private int idade;
    private String cargo;

    // Construtor
    public Pessoa(String nome, int idade, String cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    // Getters
    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    public String getCargo() {
        return cargo;
    }

    // Método para formatar a saída como JSON
   public String toJson() {
        StringBuilder json = new StringBuilder();
        json.append("{\n");
        json.append("   \"nome\": \"" + nome + "\",\n");
        json.append("   \"idade\": " + idade + ",\n");
        json.append("   \"cargo\": \"" + cargo + "\"\n");
        json.append("}");
        return json.toString();
    }
    public static void main(String[] args) {
        // Criando uma instância de Pessoa
        Pessoa pessoa = new Pessoa("Lucas", 25, "Engenheiro de software");

        // Exibindo a saída no console formatada como JSON
        System.out.println(pessoa.toJson());
    }
}
