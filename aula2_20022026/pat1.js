// Array de 20 elementos
let frutas = [
  "Maçã", "Banana", "Laranja", "Uva", "Pera",
  "Manga", "Abacaxi", "Melancia", "Kiwi", "Morango",
  "Limão", "Cereja", "Ameixa", "Caqui", "Goiaba",
  "Mamão", "Maracujá", "Jabuticaba", "Graviola", "Pitaya"
];

// A) Elementos das posições
console.log("Posição 0:", frutas[0]);
console.log("Posição 7:", frutas[7]);
console.log("Posição 11:", frutas[11]);
console.log("Posição 15:", frutas[15]);
console.log("Posição 18:", frutas[18]);
console.log("Posição 20:", frutas[20]); 

// B) Penúltimo e último
console.log("Penúltimo:", frutas[frutas.length - 2]);
console.log("Último:", frutas[frutas.length - 1]);

// C) Quantidade de elementos
console.log("Total de elementos:", frutas.length);

// D) Adicionando novo elemento
frutas.push("Carambola");

// E) Imprimir todos usando "for"
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}