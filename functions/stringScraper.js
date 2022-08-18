module.exports = {
    name: "stringScraper",
    description: "retrieves desired content from a string",
    execute(string, startsWith, returnSize){

        let searchSize = startsWith.length;
        let returnString = "";
        
        for(let i = 0; i < string.length; i++)
        {
            let element = string.substring(i, i + searchSize);
            if (element == startsWith){
                returnString = string.substring(i, i + returnSize)
            };
        }
    
        return returnString;
    
    

    }}