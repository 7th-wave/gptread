
// Get active document
var doc = app.activeDocument;

// Get all layers in the document
var layers = doc.layers;
var tts = 'tts_';
var logos = 'logos_';
log("Start!");
log("Layer Size: " + layers.length);

// Iterate over each layer in the document
for (var i = 0; i < layers.length; i++) {
  // Get the sublayers in the current layer
  var sublayers = layers[i].symbolItems;
  log("Layer: " + layers[i].name + " Sublayer: " + sublayers.length);

  // Iterate over each sublayer
  for (var j = 0; j < sublayers.length; j++) {
    // Get the symbol in the current sublayer
    log("Layer: " + layers[i].name + " Sublayer: " + sublayers[j].name);
    var symbol = sublayers[j];


    // Get a random symbol from the document
    var symbols = doc.symbols;
    var selectedSymbols = [];
    for (var k = 0; k < symbols.length; k++) {
      if (symbols[k].name.indexOf(tts) > -1) {
        selectedSymbols.push(symbols[k]);
      }
    }

    var randomSymbolIndex = Math.floor(Math.random() * selectedSymbols.length);
    var randomSymbol = selectedSymbols[randomSymbolIndex];

    // Swap the current symbol with the random one
    sublayers[j].symbol = randomSymbol;

    // Rename the sublayer to match the new symbol name
    sublayers[j].name = randomSymbol.name;
  }
}


// Function to log messages
function log(message) {
  var logFile = new File(Folder.desktop + "/script_r_log.txt");
  logFile.open("a");
  logFile.writeln(new Date().toLocaleString() + ": " + message);
  logFile.close();
}
