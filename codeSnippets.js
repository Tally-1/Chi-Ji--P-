const channel = client.channels.cache.get('921858569391972404'); //(get channel)


//      get channel messages
channel.messages.fetch({ limit: 1 }).then(messages => {
    console.log(`Received ${messages.size} messages`);
    //Iterate through the messages here with the variable "messages".
    messages.forEach(message => console.log(message.id))
  });


 "1639977243967"

 //setTimeout(function() {deleteMessage(message.channel, message.id)}, 15000);

 if (msg.guild.me.permissionsIn(msg.channel).has("ADMINISTRATOR") &&
            msg.guild.me.permissionsIn(msg.channel).has("MANAGE_MESSAGES"))
            {
                channel.send("Bot does not have permission to delete messages");
                return false;
            }