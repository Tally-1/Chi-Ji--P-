module.exports = {
    name: "matic",
    description: "Gets the price for PolyGon",
    execute(message, client){

        client.functions.get("showAssetPrice").execute("eth", 0, client, message);

    }}