
const corredor1 = [1, 1, 0, 1, 0, 0]
const corredor2 = [1, 1, 1, 1, 1, 0]
const corredor3 = [0, 0, 0, 1, 0, 0]
const corredor4 = [0, 1, 0, 1, 1, 0]
const andar1 = [corredor1, corredor2]
const andar2 = [corredor3, corredor4]
const edGaragem = [andar1, andar2]
const valorVaga = 10

//Criação de um novo array de elementos para tornar mais simples.
const corredor0 = [0]
const corredores = new Array(corredor0, corredor1, corredor2, corredor3, corredor4)

//Função para filtrar as vagas ocupadas
const vagasOcupadasNoCorredor = (corredores) => corredores.filter(corredor => corredor === 1).length

//Array resultante das vagas ocupadas por corredor
const arrayVagasOcupadas = corredores.map(vagasOcupadasNoCorredor)

//Total de vagas ocupadas em todos corredores
const totalVagasOcupadas = arrayVagasOcupadas.reduce((a, b) => a + b, 0)

//Valor total arrecadado em R$ no EdGaragem
const valorTotal = totalVagasOcupadas * valorVaga

//Function para calcular a quantidade de vagas livres em cada corredor
function pegarVagasLivresPorAndar(primeiroCorredor, segundoCorredor) {
  return primeiroCorredor.concat(segundoCorredor).filter(item => item < 1).length
}
//Valor de vagas livres no andar1
const VagasLivresPrimeiroAndar = pegarVagasLivresPorAndar(corredor1, corredor2)

//Valor de vagas livres no andar2
const VagasLivresSegundoAndar = pegarVagasLivresPorAndar(corredor3, corredor4)

//Resultados
console.log('Resultados: ')
for (let i = 1; i <= 4; i++) {
  vagasOcupadas = corredores[i].filter(item => item > 0).length
  console.log(`O corredor ${[i]} deste prédio possui ${vagasOcupadas} vaga(s) ocupada(s)`)
}
console.log(`O andar 1 possui ${VagasLivresPrimeiroAndar} vaga(s) livre(s)`)
console.log(`O andar 2 possui ${VagasLivresSegundoAndar} vaga(s) livre(s)`)
console.log(`Este edifício garagem arrecadou um total de R$ ${valorTotal}`)