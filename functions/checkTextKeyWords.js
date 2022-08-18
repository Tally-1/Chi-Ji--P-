module.exports = {
    name: "checkTextKeyWords",
    description: "loops trough a textstring looking for a specific keyword",
    execute(text, keyWord, client){
        
        let returnValue = [false, ""];
        if (text.length < keyWord.length) return returnValue;

        let reversedText = client.functions.get("formatText").execute(text, 1);

        for(let i = 0; i < text.length; i++){
            if (i+1 >= keyWord.length){

                let firstLetter = (i- (keyWord.length -1));
                let word = text.substring(firstLetter,i+1);

                if (word === keyWord){
                                        if (!(word === "jap")){returnValue = [true, word]}
                                        else {
                                                let next = reversedText.substring(i+1, i+2);
                                                if (!(next == "a" || next == "n")){returnValue = [true, word]}
                                            }//making sure japanese or japan is not banned. For some reason the a is not registered when writing japanese?
                                    };
                
                
                /*checking the reversed text*/
                let firstReversedLetter = (i- (keyWord.length -1));
                    word = reversedText.substring(firstReversedLetter,i+1);

                if (word === keyWord){
                                        if (!(word === "jap")){returnValue = [true, word]}
                                        else {
                                                let next = reversedText.substring(i+1, i+2);
                                                if (!(next == "a" || next == "n")){returnValue = [true, word]}
                                            }
                                        
                                    };
            }
        };

        return returnValue;

    }
}