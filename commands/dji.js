module.exports = {
    name: "dji",
    description: "Gets the Dow Jones Industrial Average",
    execute(message, client){

        client.functions.get("showAssetPrice").execute("dji", 0, client, message);

    }}