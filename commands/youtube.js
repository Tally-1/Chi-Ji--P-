module.exports = {
    name: "youtube",
    description: "sends a video on how to build a discord-bot",
    execute(message){
        message.channel.send("https://www.youtube.com/watch?v=nTGtiCC3iQM&list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4")
    }
}