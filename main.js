function Telefone(ddd, numero) {
  this.ddd = ddd
  this.numero = numero

  this.getDdd = () => this.ddd
  this.setDdd = (novoDdd) => this.ddd = novoDdd

  this.getNumero = () => this.numero
  this.setNumero = (novoNumero) => this.numero = novoNumero

  this.getNumeroMaiusculo = () => `${this.ddd} ${this.numero}`.toUpperCase()
  this.getNumeroMinusculo = () => `${this.ddd} ${this.numero}`.toLowerCase()
}

function Endereco(rua, numero, cidade, estado) {
  this.rua = rua
  this.numero = numero
  this.cidade = cidade
  this.estado = estado

  this.getRua = () => this.rua
  this.setRua = (novaRua) => this.rua = novaRua

  this.getEnderecoMaiusculo = () => `${this.rua}, ${this.numero}, ${this.cidade} - ${this.estado}`.toUpperCase()
  this.getEnderecoMinusculo = () => `${this.rua}, ${this.numero}, ${this.cidade} - ${this.estado}`.toLowerCase()
}

function Cliente(nome, cpf, endereco) {
  this.nome = nome
  this.cpf = cpf
  this.endereco = endereco
  this.telefones = []

  this.getNome = () => this.nome
  this.setNome = (novoNome) => this.nome = novoNome

  this.getCpf = () => this.cpf
  this.setCpf = (novoCpf) => this.cpf = novoCpf

  this.getNomeMaiusculo = () => this.nome.toUpperCase()
  this.getNomeMinusculo = () => this.nome.toLowerCase()

  this.adicionarTelefone = (telefone) => this.telefones.push(telefone)

  this.getDescricao = () => {
    const telefonesFormatados = this.telefones.map(t => t.getNumeroMaiusculo()).join(", ")
    return `• Nome: ${this.getNome()}
• CPF: ${this.getCpf()}
• Endereço: ${this.endereco.getEnderecoMaiusculo()}
• Telefones: ${telefonesFormatados}\n`
  }
}

function ordenarClientesPorNome(clientes) {
  return [...clientes].sort((a, b) => a.nome.localeCompare(b.nome))
}


const endereco1 = new Endereco("Rua A", 10, "São Paulo", "SP")
const endereco2 = new Endereco("Rua B", 20, "Rio de Janeiro", "RJ")
const endereco3 = new Endereco("Rua C", 30, "Curitiba", "PR")

const cliente1 = new Cliente("Thiago", "111.111.111-11", endereco1)
const cliente2 = new Cliente("Amanda", "222.222.222-22", endereco2)
const cliente3 = new Cliente("Carlos", "333.333.333-33", endereco3)

cliente1.adicionarTelefone(new Telefone("11", "99999-0001"))
cliente2.adicionarTelefone(new Telefone("21", "98888-0002"))
cliente3.adicionarTelefone(new Telefone("41", "97777-0003"))

const clientes = [cliente1, cliente2, cliente3]

console.log("=== CLIENTES ===")
clientes.forEach(c => console.log(c.getDescricao()))

console.log("=== CLIENTES ORDENADOS POR NOME ===")
const clientesOrdenados = ordenarClientesPorNome(clientes)
clientesOrdenados.forEach(c => console.log(c.getDescricao()))
