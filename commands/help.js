module.exports = {
    name: "help",
    description: "Lists all commands available in a alphabetic order.",
    execute(message, client, prefix){

        let reply = "Commands:\n\n```sqf\n";
        const commandAmount = client.commands.size;

        client.commands.forEach(command =>{
            reply = (reply + "Command:     " + prefix + command.name+ "\n" +
                             "Description: '" + command.description +"'\n\n")
        })

        reply = (reply + "```\n\nCopy-paste the commands to get the result described...");

        message.reply(reply);

    }}