module.exports = {
    name: "showAssetPrice",
    description: "retrieves the price of an asset from yahoo finance",
    execute(assetName, operation, client, message){

        const rp = require('request-promise');

        const url = client.functions.get("getAssetUrl").execute(assetName);

       
        rp(url)
      .then(function(html){
        //   console.log(html);
    
        let price = client.functions.get("htmlScraper").execute(html, '<fin-streamer class="Fw(b)', 'value="', 9, client);
        
            price = client.functions.get("scrapeNumbers").execute(price);
            
            let middleSegment = "USD  =>     ";

            if (assetName == "dji" || assetName == "sp500"){middleSegment = "     =>     "}

            let replyText = ("```sqf\n'" +(assetName.toUpperCase()) + "'"  + middleSegment +price+"```");


            console.log(assetName + " " + price);

            
            
            if (operation < 1){
              if (!(message === "")){
                message.reply(replyText);
              }
            }

            if (operation === 1){
                const   path = require("path");
                const   fileName = assetName + ".json"
                const   filePath = path.join(__dirname, "data", "assets", fileName);
    
              client.functions.get("addToFileArr").execute(filePath, price, true);
            }
        
    
        
      })
      .catch(function(err){
        console.log('\x1b[33m%s\x1b[0m', "Error ")
        return -1;
        
      });
    
    
    
    }}