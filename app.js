const express = require("express");
const app = express();

const fs = require("fs"); 

const Discord = require("discord.js");
const req = require("express/lib/request");
const { channel } = require("diagnostics_channel");
const { time, timeStamp } = require("console");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });/* declare the client (bot)*/

client.commands = new Discord.Collection(); 
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js")); //creates array of files at "currentDir/commands". Filters out non-js files

client.functions = new Discord.Collection(); 
const functionFiles = fs.readdirSync("./functions").filter(file => file.endsWith(".js")); 


/*Declaring commands */
for(const file of commandFiles){
    const command = require(`./commands/${file}`); 
    client.commands.set(command.name, command);
}


/*Declaring functions */
for(const file of functionFiles){
    const fnc = require(`./functions/${file}`); 
    client.functions.set(fnc.name, fnc);
}

const prefix = "-"; //prefix used to initiate a command 



//event-handler on a message
client.on("messageCreate", message =>{
    
    if(message.author.bot)  {
                                if  ((message.content.startsWith("You have been observed by")) ||
                                    (message.content.endsWith("[P]")))
                                {
                                    client.functions.get("moveMsgToBin").execute(message, 20000);//sets the message to be deleted after a 20sec delay
                                }
                                return;
                            };
    
    
        let infraction = client.functions.get("messageScreener").execute(message, client, true); 
        
    if(message.content == "!help"){
        client.commands.get("help").execute(message, client, prefix);
    }
    
    if (!infraction){
    if (message.content.startsWith(prefix)) {


    /*fetching commands */
    const args = message.content.slice(prefix.length).split(/ * /); //remove the prefix
    
    const command = args.shift().toLowerCase(); //takes the returned message and lowerCases it in order to avoid caps-errors

    if (command === "ping"){
        client.commands.get("ping").execute(message, args);
    } 
    else if(command === "youtube"){
        client.commands.get("youtube").execute(message, args);
    }

    else if(command === "clean_bot_msg"){

        message.reply('```sqf\n"Scanning..."```\n [P]');
        client.commands.get("clean_bot_msg").execute(message, client, 0);
    }

    else if(command === "scan_infractions")
    {
        message.reply('```sqf\n"Scanning..."```\n [P]');
        client.commands.get("scan_infractions").execute(message, client);
    }
    else if(command === "help"){
        client.commands.get("help").execute(message, client, prefix);
    }
    
    
    else if(command === "eth"){
        client.commands.get("eth").execute(message, client);
    }
    else if(command === "btc"){
        client.commands.get("btc").execute(message, client);
    }
    else if(command === "dot"){
        client.commands.get("dot").execute(message, client);
    }
    else if(command === "matic"){
        client.commands.get("matic").execute(message, client);
    }
    else if(command === "sp500"){
        client.commands.get("sp500").execute(message, client);
    }
    else if(command === "dji"){
        client.commands.get("dji").execute(message, client);
    }
    
    
    

}}});

/*function to run once bot is loaded*/
client.once("ready", () => {
    console.log("[P] is online");

    
let DelReady = true;
setInterval(function(){
    client.functions.get("msgCleanUp").execute(client, DelReady); 
},
1000);


});



/*
    load bot 
    Token needs to be inserted as a string to the .login() function.
*/
client.login("");