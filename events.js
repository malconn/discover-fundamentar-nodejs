const { EventEmitter} = require('events')

const ev = new EventEmitter
ev.on('saySomething',(message)=>{
 console.log('Eu ouvi vc:', message)
})
ev.emit('saySomething',"Malcon")