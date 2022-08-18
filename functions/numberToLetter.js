module.exports = {
    name: "numberToLetter",
    description: "returns a letter for a number commonly used as a letter",
    execute(number){
        

            if (number === "3"){return "e";}
    else    if (number === "4"){return "a";}
    else    if (number === "5"){return "s";}
    else    if (number === "6"){return "g";}
    else    if (number === "7"){return "t";}
    else    if (number === "8"){return "a";}
    else    if (number === "0"){return "o";}
    else    if (number === "1"){return "i";}
            else {return number};

    }
}