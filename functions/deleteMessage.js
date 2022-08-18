const { Channel } = require("discord.js");

module.exports = {
    name: "deleteMessage",
    description: "deletes a message",
    execute(channelid, id, client, DelReady){

      if (!DelReady){console.log   ("engine busy, cannot delete"); return false;};
      DelReady = false;
        
        /*making sure correct data is passed before deleting */
        if(client   === undefined)  {console.log   ("undefined client, cannot delete message"); return false;};

        const channel = client.channels.cache.get(channelid);
        if(channel  === undefined)  {console.log   ("undefined channel, cannot delete message"); return false;};
        if(id       === undefined)  {console.log   ("undefined message id, cannot delete message"); return false;};
        
        
//
        channel.messages.fetch({ limit: 100 }).then(messages => {

          

          let count = 1;
          let max = (messages.size);
          
          //Iterate through the messages.
          messages.forEach(message => {                                   
                                          
                                          if (id === message.id){
                                              
                                              if (message.deletable){
                                                console.log("deleting...");
                                                message.delete();
                                                DelReady = true;
                                                return true;
                                              }
                                              else{
                                                console.log("message cannot be deleted");
                                              }

                                              
                                              
                                          }
                                          if (count == (max)){
                                              console.log("message could not be found");
                                              DelReady = true;
                                              return true;
                                              
                                          }
                                          
                                          count++;
                                      });
          
  
        });

          

          return true;
    }}