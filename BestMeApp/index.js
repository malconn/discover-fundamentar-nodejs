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

process.on("exit",()=>{
 console.log(`
  Bacana Malcon!
  O que aprendi hoje foi:
  ${answer[0]}

  O que me deixou aborrecido? E o que eu poderia fazer para melhorar foi:
  ${answer[1]}

  O que me deixou feliz hoje foi:
  ${answer[2]}

  Quantas pessoas ajudei hoje foi:
  ${answer[3]}
 `)
})