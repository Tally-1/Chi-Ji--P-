module.exports = {
    name: "scan_infractions",
    description: "Searches the last messages, and deletes messages that contains bad stuff",
    execute(message, client){

        let infractionCount = 0;
        
        const commandMessage = message;
        message.channel.messages.fetch({ limit: 70 }).then(messages => {

            
            let count = 1;
            let max = (messages.size);
            messages.forEach(scanMessage => {
                                            if(!scanMessage.author.bot)  {

                                                const infraction = client.functions.get("messageScreener").execute(scanMessage, client, false)
                                                    if (infraction)
                                                        {
                                                            infractionCount++;
                                                        };
                                                };

                                               

                                            count++;
                                        });

                                        let reply = "```sqf\nFound " + infractionCount + " infractions... \nDeleting...```\n [P]"
                                        if(infractionCount === 0){reply = '```sqf\n"No Infractions were found..." ```\n [P]'}
                                        commandMessage.reply(reply)
      });
    }}