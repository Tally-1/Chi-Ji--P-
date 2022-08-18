module.exports = {
    name: "infractionReply",
    description: "creates a response to a message that breaks the rules",
    execute(message, words, level, client, eventHandling){
        
        function getInfractionLevel(level){
            let returnString = "insignificant"
            if(level === 1){returnString = "Mild"};
            if(level === 2){returnString = "Serious"};
            if(level === 3){returnString = "Severe"};
            if(level === 4){returnString = "Extreme"};

            return returnString;
        };



        let word = words[0];
        let creditReduction = ((level * 1000) * words.length);
        let infractionCount = words.length;
        if (infractionCount > 1){level++}
        let infraction = getInfractionLevel(level);
        
        let line_1 = "You have been observed by **Chi-ji-[P]**!";
        let line_E = ""
        let line_2 = "Infraction:                        [ **" + word + "** ]";
        let line_3 = "level of infraction:            **"+ infraction +"**";
        let line_4 = "social credit deducted:    **"+creditReduction+"**";
        let line_D = "";

        if (infractionCount > 1){
            line_E = ("\nInfractionCount:              **" + infractionCount + "**")
            line_2 = "Infractions:                       [ **" + words + "** ]";
        };

        if (level > 2)  {
                            line_D = "\n**The message is removed to ensure stability and safety**";
                                                   
                        }

        let replyText = 
        line_1
        + line_E
        + "\n" +
        line_2
        + "\n" +
        line_3
        + "\n" +
        line_4

        +line_D
        ;
        
        if (eventHandling)
        {message.reply(replyText)};

        client.functions.get("moveMsgToBin").execute(message, 0);
        message.channel.send(`**[Redacted, Social terrorism]**`);
        

                                
                                    
                                    
                                    
                                    
                                    

                            // else {
                            //     message.channel.send("cannot delete message")
                            // }
    
    }
}