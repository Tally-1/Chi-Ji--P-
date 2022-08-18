module.exports = {
    name: "htmlScraper",
    description: "scrapes a html stringed-document for a desired value",
    execute(document, searchedElement, wantedValue, lengthFinalValue, client){

        
        let returnString = client.functions.get("stringScraper").execute(document, searchedElement, 300);

        returnString = client.functions.get("stringScraper").execute(returnString, wantedValue, (lengthFinalValue + wantedValue.length));
    

            return returnString;
        
  
    }};