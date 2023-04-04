// Get active document
var doc = app.activeDocument;

// Get all layers in the document
var layers = doc.layers;

// Iterate over each layer in the document
for (var i = 0; i < layers.length; i++) {
  // Get the sublayers in the current layer
  var sublayers = layers[i].layers;

  // Iterate over each sublayer
  for (var j = 0; j < sublayers.length; j++) {
    // Get the symbol in the current sublayer
    var symbol = sublayers[j].symbolItems[0].symbol;

    // Get a random symbol from the document
    var symbols = doc.symbols;
    var randomSymbolIndex = Math.floor(Math.random() * symbols.length);
    var randomSymbol = symbols[randomSymbolIndex];

    // Swap the current symbol with the random one
    sublayers[j].symbolItems[0].symbol = randomSymbol;

    // Rename the sublayer to match the new symbol name
    sublayers[j].name = randomSymbol.name;
  }
}

// Refresh the document
doc.select(null);
