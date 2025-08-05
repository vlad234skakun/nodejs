import EventEmitter from "node:events"

const emitter = new EventEmitter()

emitter.on("sendmessage", message => {
    const {name , messageText } = message
    console.log(`${name}: ${messageText}`);
    
})

const sendMessage = (name, messageText , emitter) => {
    emitter.emit("sendmessage", {name , messageText})

}

sendMessage("Vladyslav" , "Как дела?" , emitter)
sendMessage("Nikita" , "Нормально, а ты как?" , emitter)
sendMessage("Vladyslav" , "По тихоньку" , emitter)



