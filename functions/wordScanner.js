module.exports = {
    name: "wordScanner",
    description: "checks for presence of a keyword in a string from a Array of keywords. will try to catch workarounds",
    execute(message, keyWordArray, client){
        
        
        
        let scanResult = [false, ""];
        let returnResult = [false, []];

        /*formatting text. LowerCase and removing spaces*/
        let text = message.content.toLowerCase();
        let baseText = client.functions.get("formatText").execute(text, 0);

        /*scanning the text for words in the keyWordArray list*/
        for(const keyWord of keyWordArray){
            scanResult = client.functions.get("checkTextKeyWords").execute(baseText, keyWord, client);
            /*scanning base-text */
            if (scanResult[0])
            {
                returnResult[0] = true;
                returnResult[1].push(scanResult[1]);
            }
            else
                {
            
                    /*replacing numbers with letters*/
                    let noNumberText = client.functions.get("formatText").execute(baseText, 2, client);
                    scanResult = client.functions.get("checkTextKeyWords").execute(noNumberText, keyWord, client);
                    if (scanResult[0])
                    {
                        returnResult[0] = true;
                        returnResult[1].push(scanResult[1]);
                    }
                    else
                        {
                            /*removing repeated letters*/
                            let reducedText = client.functions.get("formatText").execute(baseText, 3, client);
                            scanResult = client.functions.get("checkTextKeyWords").execute(reducedText, keyWord, client);
                            if (scanResult[0])
                            {
                                returnResult[0] = true;
                                returnResult[1].push(scanResult[1]);
                            }
                            else
                                {
                                    /*checking for number-letters in the reduced text */
                                    let noNumberText2 = client.functions.get("formatText").execute(reducedText, 2, client);
                                    scanResult = client.functions.get("checkTextKeyWords").execute(noNumberText2, keyWord, client);
                                    if (scanResult[0])
                                    {
                                        returnResult[0] = true;
                                        returnResult[1].push(scanResult[1]);
                                    }
                                    else
                                        {
                                            /*removing repeated letters after converting numbers into letters */
                                            let reducedText2 = client.functions.get("formatText").execute(noNumberText2, 3, client);
                                            scanResult = client.functions.get("checkTextKeyWords").execute(reducedText2, keyWord, client);
                                            if (scanResult[0])
                                            {
                                                returnResult[0] = true;
                                                returnResult[1].push(scanResult[1]);
                                            }
                                        }
                                }
                        }
                }
            }
        
            return returnResult;

    }

    
}