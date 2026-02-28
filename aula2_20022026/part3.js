// Array com 10 objetos
let produtos = [
  { nome: "Mouse", preco: 50, estoque: 30 },
  { nome: "Teclado", preco: 120, estoque: 20 },
  { nome: "Monitor", preco: 900, estoque: 10 },
  { nome: "Notebook", preco: 3500, estoque: 5 },
  { nome: "Headset", preco: 200, estoque: 15 },
  { nome: "Webcam", preco: 150, estoque: 8 },
  { nome: "Impressora", preco: 600, estoque: 4 },
  { nome: "Celular", preco: 2500, estoque: 12 },
  { nome: "Tablet", preco: 1800, estoque: 7 },
  { nome: "Carregador", preco: 80, estoque: 25 }
];

// A) Preço do segundo objeto
console.log("Preço do segundo:", produtos[1].preco);

// B) Nome do terceiro objeto
console.log("Nome do terceiro:", produtos[2].nome);

// C) Quantos itens existem
console.log("Total de produtos:", produtos.length);part3.js

// D) Imprimir nome de todos
for (let i = 0; i < produtos.length; i++) {
  console.log("Produto:", produtos[i].nome);
}

// E) Somar total do estoque
let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}

console.log("Total em estoque:", totalEstoque);

// F) Objeto com maior estoque
let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}

console.log("Produto com maior estoque:", maiorEstoque.nome);