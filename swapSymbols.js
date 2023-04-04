// Get active document
var doc = app.activeDocument;

// Get the first row of layers
var firstRow = doc.layers.slice(0, 20);

// Duplicate the first row and move it down
var secondRow = firstRow.duplicate(doc, ElementPlacement.PLACEAFTER);
var secondRowTop = secondRow[0].top;
for (var i = 0; i < secondRow.length; i++) {
    secondRow[i].translate(0, 100);
}

// Get all symbols in the document
var symbols = doc.symbols;

// Iterate over each layer in the second row
for (var i = 0; i < secondRow.length; i++) {
  // Get the symbol in the current layer
  var symbol = secondRow[i].symbolItems[0].symbol;

  // Get a random symbol from the document
  var randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  var randomSymbol = symbols[randomSymbolIndex];

  // Swap the current symbol with the random one
  secondRow[i].symbolItems[0].symbol = randomSymbol;

  // Rename the layer to match the new symbol name
  secondRow[i].name = randomSymbol.name;
}

// Refresh the document
doc.select(null);
doc.selection = [secondRow];
