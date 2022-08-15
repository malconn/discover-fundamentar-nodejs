const questions = [
 "O que aprendi hoje ?",
 "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
 "O que me deixou feliz hoje?",
 "Quantas pessoas ajudei hoje?",
]
const answer = []

const ask = ( index = 0 ) =>{
 process.stdout.write("" + questions[index] + " > ")
}

ask()

process.stdin.on("data",data=>{
 answer.push(data.toString().trim())
 if(answer.length < questions.length){
  ask(answer.length)
 }else{
  process.exit()
 }
})