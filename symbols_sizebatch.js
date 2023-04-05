// Get active document
var doc = app.activeDocument;





function resizeSymbols(newWidth, newHeight) {
  var doc = app.activeDocument;
  var symbols = doc.symbols;

  for (var i = 0; i < symbols.length; i++) {
    var symbol = symbols[i];
    var tempSymbolItem = doc.symbolItems.add(symbol);

    var currentWidth = tempSymbolItem.width;
    var currentHeight = tempSymbolItem.height;

    var scaleX = (newWidth / currentWidth) * 100;
    var scaleY = (newHeight / currentHeight) * 100;

    tempSymbolItem.resize(scaleX, scaleY, true, true, true, true, 1);
    
    // Redefine the symbol based on the resized instance
    symbol.redraw(tempSymbolItem);
    
    // Remove the temporary instance from the artboard
    tempSymbolItem.remove();
  }
}

// Specify the new size in inches
var newWidthInInches = 1.85;
var newHeightInInches = 1.85;

// Convert inches to points (1 inch = 72 points)
var newWidth = newWidthInInches * 72;
var newHeight = newHeightInInches * 72;

resizeSymbols(newWidth, newHeight);
