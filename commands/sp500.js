module.exports = {
    name: "sp500",
    description: "Gets the S&P 500",
    execute(message, client){

        client.functions.get("showAssetPrice").execute("sp500", 0, client, message);

    }}