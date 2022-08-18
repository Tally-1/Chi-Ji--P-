module.exports = {
    name: "getAssetUrl",
    description: "retrieves the url of an asset from yahoo finance",
    execute(assetName){

        let url = "";
        if(assetName == "eth"){url = 'https://finance.yahoo.com/quote/ETH-USD/'};
        if(assetName == "btc"){url = 'https://finance.yahoo.com/quote/BTC-USD/'};
        if(assetName == "dot"){url = 'https://finance.yahoo.com/quote/DOT-USD/'};
        if(assetName == "matic"){url = 'https://finance.yahoo.com/quote/MATIC-USD/'};
    
        if(assetName == "sp500"){url = 'https://finance.yahoo.com/quote/%5EGSPC?p=%5EGSPC'};
        if(assetName == "dji"){url = 'https://finance.yahoo.com/quote/%5EDJI?p=^DJI&.tsrc=fin-srch'};
        return url;

    }}