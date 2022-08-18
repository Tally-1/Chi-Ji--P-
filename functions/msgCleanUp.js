module.exports = {
    name: "msgCleanUp",
    description: "looks through a list of messages scheduled for deletion and attampts to delete them",
    execute(client, DelReady){

        

        const   fs = require("fs");
        const   path = require("path");
        const   FilePath = path.join(__dirname, "data", "msgToDelete.json");
        const   filedata = fs.readFileSync(FilePath);
        const   msgDataArr = JSON.parse(filedata);
        

        if(msgDataArr.length > 0){
            
            let deletedAmount = 0;
            for(const msg of msgDataArr){

                let time = (msg.time - 0);//the - 195000 is there because the timestamp is set into the future
                let channel     = msg.channel;
                let id          = msg.id;
                let timeLimit   = msg.deleteOn;
                
                


                //in order to avoid getting blocked by global request-limitations time is added to the original time limit
                  if(msgDataArr.length > 1){timeLimit = (timeLimit + (msgDataArr.length * 500))}; 
                

                if ((Date.now() - time) > timeLimit)
                {
                   
                    
                    //Make sure the engine does not delete more than 10 msg pr iteration(have had some issues with crashes because of this)
                    if (deletedAmount < 10){
                         
                                                
                         const deleted = client.functions.get("deleteMessage").execute(channel, id, client, DelReady);
                         
                        
                        
                        if (deleted){
                                        msgDataArr.splice (msgDataArr.indexOf(msg), 1);

                                        fs.writeFileSync(FilePath, JSON.stringify(msgDataArr));
                                        
                                        let     endMessage  = (msgDataArr.length) +" left in the bin";
                                        if (msgDataArr.length === 0){endMessage = "Message-bin empty"};

                                        console.log(endMessage);
                                        deletedAmount++;
                                    };     
                        
                    }
                   
                
                }
               
            
            }
            
        }

  

    }}