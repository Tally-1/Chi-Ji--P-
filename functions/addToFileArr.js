module.exports = {
    name: "addToFileArr",
    description: "adds an item to a json arr, inside a file",
    execute(filePath, valueToAdd, unique){
        const   fs = require("fs");
        const   filedata = fs.readFileSync(filePath);
        const   fileArr = JSON.parse(filedata);
    
        if (!unique){
            fileArr.push(valueToAdd);
            fs.writeFileSync(filePath, JSON.stringify(fileArr));
        }
        else {
            
            if(fileArr.indexOf(valueToAdd) === -1 ){
            fileArr.push(valueToAdd);
            fs.writeFileSync(filePath, JSON.stringify(fileArr));
        }}
    }}