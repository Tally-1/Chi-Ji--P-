module.exports = {
    name: "dot",
    description: "Gets the price for Polkadot",
    execute(message, client){

        client.functions.get("showAssetPrice").execute("dot", 0, client, message);

    }}