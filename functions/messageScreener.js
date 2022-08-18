module.exports = {
    name: "messageScreener",
    description: "screens message for unwanted scheit",
    execute(message, client, eventHandling){
        
        if (message.author.bot) return;
        


       // console.log(message.author.username + "#" + message.author.discriminator  + " said: " + message.content);
        

         /*retrieving banned words */
        const fs = require("fs");
        const path = require("path");
        const FilePath = path.join(__dirname, "data", "bannedWords.json");
        const filedata = fs.readFileSync(FilePath);
        const bannedWords = JSON.parse(filedata);

        /*checking for banned words */
        let scanResult = client.functions.get("wordScanner").execute(message, bannedWords, client);
        if (scanResult[0]){
            client.functions.get("infractionReply").execute(message, scanResult[1], 3, client, eventHandling);
        }
        return scanResult[0];

        


        

        
        
    }
}