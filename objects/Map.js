const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

const novasPessoas = new Map();

for (let pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);

for (let [indentifier, {id, nome}] of novasPessoas) {
  console.log(indentifier, id, nome);
}

