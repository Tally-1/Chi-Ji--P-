module.exports = {
    name: "eth",
    description: "Gets the price for etherum",
    execute(message, client){

        client.functions.get("showAssetPrice").execute("eth", 0, client, message);

    }}