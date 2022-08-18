module.exports = {
    name: "formatText",
    description: "depending on the formatType this function will: Remove spaces, reverse string, replace numberchars with letters",
    execute(text, formatType, client){

    let textArr = [];
    let returnString = "";
    let letter = "";

        /*remove spaces and other non-letter chars*/
        if (formatType === 0){

            const removeArr = " .,;:<>'!#¤%&/()=@£${[]}-_¨^~|".split("");
            removeArr.push("\@");
            

            for(let i = 0; i < text.length; i++)
            {
                letter = text.substring(i, i + 1);

                if(removeArr.indexOf(letter) === -1)
                {
                    textArr.push(letter)
                }
                
            }
            returnString = textArr.join("");
            return returnString;
        }


        /*reverse */
        if (formatType === 1){
            for(let i = 0; i < text.length; i++)
            {
                letter = text.substring(i, i + 1);
                textArr.push(letter);
                

            }
            textArr = textArr.reverse();
            returnString = textArr.join("");
            return returnString;
        }

        /*translating numbers into letters */
        if (formatType === 2){
            for(let i = 0; i < text.length; i++)
            {
                letter = text.substring(i, i + 1);
                letter = client.functions.get("numberToLetter").execute(letter);
                textArr.push(letter);
            }
            returnString = textArr.join("");
            return returnString;
        }


        /*remove repeating letters */
        if (formatType === 3){
            for(let i = 0; i < text.length; i++)
            {
                let repeated = false;
                letter = text.substring(i, i + 1);
                let nextLetter = text.substring(i+1, i+2);
                let nextLetter2 = text.substring(i+2, i+3);

                if (i+2 < text.length){

                if (!(letter === "g" || letter === "k")){
                    if (letter === nextLetter){repeated = true};
                    
                }
                else{
                    if (letter === nextLetter2){repeated = true};
                }
            }

                if (!repeated) {textArr.push(letter);}
            }
            returnString = textArr.join("");
            return returnString;
        }


    }
}