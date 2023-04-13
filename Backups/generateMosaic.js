// Get the active document
var doc = app.activeDocument;

// Get the artboard by name
var artboardName = "mosaic_1";
var tts = 'tts_';

var artboard = doc.artboards.getByName(artboardName);

// Create a new layer
var layer = doc.layers.add();

// Get the symbols in the document
var symbols = doc.symbols;



// Get the width and height of a symbol
var symbolWidth = 133.2;
var symbolHeight = 133.2;

// Calculate the number of symbols needed to cover the artboard
var numSymbolsX = Math.ceil(artboard.artboardRect[2] / symbolWidth);
var numSymbolsY = -Math.ceil(artboard.artboardRect[3] / symbolHeight);
var numSymbols = numSymbolsX * numSymbolsY;

alert(numSymbolsX);

// Loop through the number of symbols to place
for (var i = 0; i < numSymbols; i++) {
  // Get a random symbol
  var randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  var symbol = symbols[randomSymbolIndex];

  // Calculate the position of the symbol
  var x = (i % numSymbolsX) * symbolWidth;
  var y = -(Math.floor(i / numSymbolsX) * symbolHeight);

  // Create a new symbol instance at the calculated position
  var symbolItem = layer.symbolItems.add(symbol);
  symbolItem.left = x + artboard.artboardRect[0];
  symbolItem.top = y + artboard.artboardRect[1];
}
