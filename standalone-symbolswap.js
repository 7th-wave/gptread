// Get active document
var doc = app.activeDocument;

function swapSublayerSymbols() {
    var doc = app.activeDocument;

    // Specify the layer and sublayers to swap symbols
    var targetLayerName = "Layer-1";
    var targetSublayerName1 = "Sublayer-1";
    var targetSublayerName2 = "Sublayer-2";

    // Find the specified layer and sublayers
    var targetLayer = doc.layers.getByName(targetLayerName);
    var targetSublayer1 = targetLayer.layers.getByName(targetSublayerName1);
    var targetSublayer2 = targetLayer.layers.getByName(targetSublayerName2);

    // Get the symbols of the specified sublayers
    var symbol1 = targetSublayer1.pageItems[0];
    var symbol2 = targetSublayer2.pageItems[0];

    // Swap the symbols
    var tempSymbol = symbol1.symbol;
    symbol1.symbol = symbol2.symbol;
    symbol2.symbol = tempSymbol;
}

swapSublayerSymbols();