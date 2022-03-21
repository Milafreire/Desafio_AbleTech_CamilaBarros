/* Trabalharemos com um edifício garagem, onde cada andar terá corredores e
cada corredor terá vagas, vagas com o número 1 estão ocupadas e vagas com o
número 0 estão livres. Cada vaga ocupada custa o valor de 10 Reais.

- Dado um corredor, retornar o total de vagas ocupadas
- Dado um andar, retornar o total de vagas livre
- Dado um edifício garagem, retornar o valor total arrecadado
Exemplos de como ficarão as estruturas de dados */

const corredor1 = [1, 1, 0, 1, 0, 0]
const corredor2 = [1, 1, 1, 1, 1, 0]
const andar1 = corredor1.concat(corredor2)
const corredor3 = [0, 0, 0, 1, 0, 0]
const corredor4 = [0, 1, 0, 1, 1, 0]
const andar2 = corredor3.concat(corredor4)
const edGaragem = [andar1, andar2]
const valorVaga = 10

const vagasOcupadasC1 = corredor1.filter(item => item === 1).length
const vagasOcupadasC2 = corredor2.filter(item => item === 1).length
const vagasAndar1 = andar1.filter(item => item < 1).length
const vagasOcupadasC3 = corredor3.filter(item => item === 1).length
const vagasOcupadasC4 = corredor4.filter(item => item === 1).length
const vagasAndar2 = andar2.filter(item => item < 1).length
const totalValordasVagas = (vagasOcpC1 + vagasOcpC2 + vagasOcpC3 + vagasOcpC4) * valorVaga

console.log(`O corredor 1 deste prédio possui ${vagasOcpC1} vaga(s) ocupada(s)`)
console.log(`O corredor 2 deste prédio possui ${vagasOcpC2} vaga(s) ocupada(s)`)
console.log(`O corredor 3 deste prédio possui ${vagasOcpC3} vaga(s) ocupada(s)`)
console.log(`O corredor 4 deste prédio possui ${vagasOcpC4} vaga(s) ocupada(s)`)
console.log(`O andar 1 possui ${vagasAndar1} vaga(s) livre(s)`)
console.log(`O andar 2 possui ${vagasAndar2} vaga(s) livre(s)`)
console.log(`Este edifício garagem arrecadou um total de R$ ${totalValordasVagas}`)