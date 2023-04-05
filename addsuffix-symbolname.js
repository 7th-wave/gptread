// Get active document
var doc = app.activeDocument;

// Get all layers in the document
var layers = doc.layers;



function addPrefixToSymbolNames(prefix) {
    var doc = app.activeDocument;
    var symbols = doc.symbols;
  
    for (var i = 0; i < symbols.length; i++) {
      var currentSymbol = symbols[i];
      currentSymbol.name = prefix + currentSymbol.name;
    }
  }
  
  // Specify the prefix to add to symbol names
  var prefix = "tts_";
  
  addPrefixToSymbolNames(prefix);