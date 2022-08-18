module.exports = {
    name: "moveMsgToBin",
    description: "moves message to the msgToDelete.json file, where it will be scheduled for deletion",
    execute(message, deletionTime){

        const fs = require("fs");
        const path = require("path");
        const FilePath = path.join(__dirname, "data", "msgToDelete.json");
        const filedata = fs.readFileSync(FilePath);
        const msgDataArr = JSON.parse(filedata);
       
        const msgData = {
            channel:    message.channel.id,
            id:         message.id,
            time:       message.createdTimestamp,
            deleteOn:   deletionTime
        }

        msgDataArr.push(msgData);
        fs.writeFileSync(FilePath, JSON.stringify(msgDataArr));




    }}