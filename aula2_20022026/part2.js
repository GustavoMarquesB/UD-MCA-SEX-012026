// Criando objeto
let produto = {
  nome: "Camiseta",
  cor: "Preta",
  preco: 59.90,
  estoque: 50
};

// A) Acessar o nome
console.log("Nome:", produto.nome);

// B) Acessar o preço usando colchetes
console.log("Preço:", produto["preco"]);

// C) Atualizar estoque para 80
produto.estoque = 80;

// D) Imprimir todas as propriedades
console.log("Nome:", produto.nome);
console.log("Cor:", produto.cor);
console.log("Preço:", produto.preco);
console.log("Estoque:", produto.estoque);