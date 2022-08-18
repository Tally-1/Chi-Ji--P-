module.exports = {
    name: "btc",
    description: "Gets the price for BitCoin",
    execute(message, client){

        client.functions.get("showAssetPrice").execute("btc", 0, client, message);

    }}