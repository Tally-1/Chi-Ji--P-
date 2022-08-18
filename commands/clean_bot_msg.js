module.exports = {
    name: "clean_bot_msg",
    description: "Searches the 100 last messages, and deletes messages sendt by bots",
    execute(message, client, iterations){
        

        let botMsgCount = 0;
        message.channel.messages.fetch({ limit: 100 }).then(messages => {
           
                messages.forEach(scanMessage => {
                                                if(scanMessage.author.bot)  {
                                                                                client.functions.get("moveMsgToBin").execute(scanMessage, 0);
                                                                                botMsgCount++;
                                                                            }
                                            });
            let reply = "```sqf\nDeleting " + botMsgCount + " bot-messages... ```\n [P]";
            if(botMsgCount === 0){reply = '```sqf\n"No bot-messages found..."```\n [P]'};
            message.reply(reply);

            if (botMsgCount > 20 && (!(iterations < 3))){
                client.commands.get("clean_bot_msg").execute(message, client, (iterations + 1));
                console.log("repeating bot-message cleanup. currently on iteration " + (iterations))
            }
          });


    }}