var doc = app.activeDocument;

// Get all layers in the document
var layers = doc.layers;
var tts = 'tts_';
var includeLayers = '#';
var logos = 'ttlogo_';
log("Start!");
log("Layer Size: " + layers.length);
var ttsLayers = [];
var otherLayers = [];
var pathToSaveCollection = '';

function startProcess() {
  var numberOfHotties = 1;
  var currentItemGenerated = 0;
  for (var i = 0; i < numberOfHotties; i++) {
    swapSymbols();
    saveImage('hottie_' + currentItemGenerated);
    currentItemGenerated++;
  }
}

function swapSymbols() {
  // Get active document
 

  // Iterate over each layer in the document
  for (var i = 0; i < layers.length; i++) {
    // Get the sublayers in the current layer
    var layerName = layers[i].name;
    
    if (layerName.indexOf(includeLayers) > -1) {
      ttsLayers.push(layers[i]);
    }
  }

  if (ttsLayers.length > 0) {

    for (var i = 0; i < ttsLayers.length; i++) {
      swapLayerSymbols(ttsLayers[i]);
    }
  }


}

function swapLayerSymbols(layer) {
  var doc = app.activeDocument;

  var sublayers = layer.symbolItems;

    // Iterate over each sublayer
    for (var j = 0; j < sublayers.length; j++) {
      log("Symbol: " + extractRarityValue(sublayers[j].name));
      // Get the symbol in the current sublayer
      log("Layer: " + layer.name + " Sublayer: " + sublayers[j].name);
      var symbol = sublayers[j];

      // Get all symbols from the document
      var symbols = doc.symbols;

      // Filter symbols to only include those with tts in their name
      var ttsSymbols = symbols.filter(function(sym) {
        return sym.name.indexOf(tts) !== -1;
      });

      // Sort symbols by rarity score in ascending order
      ttsSymbols.sort(function(sym1, sym2) {
        var sym1Score = extractRarityValue(sym1.name);
        var sym2Score = extractRarityValue(sym2.name);
        return sym1Score - sym2Score;
      });

      // Get the index of the current symbol
      var currentIndex = ttsSymbols.indexOf(symbol);

      // Determine the number of times the current symbol should be swapped
      var rarityScore = extractRarityValue(symbol.name);
      var numberOfSwaps = Math.ceil(1 / rarityScore);

      // Swap the symbol with the next symbol in the list
      for (var k = 0; k < numberOfSwaps; k++) {
        var nextIndex = (currentIndex + 1) % ttsSymbols.length;
        var nextSymbol = ttsSymbols[nextIndex];
        sublayers[j].symbol = nextSymbol;
        sublayers[j].name = nextSymbol.name;
        currentIndex = nextIndex;
      }
    }
}


// Function to log messages
function log(message) {
  var logFile = new File(Folder.desktop + "/script_r_log.txt");
  logFile.open("a");
  logFile.writeln(new Date().toLocaleString() + ": " + message);
  logFile.close();
}


function saveCopyToPath() {
  if (app.documents.length === 0) {
      alert("Please open a document before running the script.");
      return;
  }

  var doc = app.activeDocument;
  var fileName = doc.name.replace(/\.[^.]*$/, "");
  var outputPath = Folder.selectDialog("Select the folder to save the copy:");

  if (outputPath === null) return;

  var destFile = new File(outputPath + "/" + fileName + "_copy.ai");

  var saveOptions = new IllustratorSaveOptions();
  saveOptions.compatibility = Compatibility.ILLUSTRATOR17;
  saveOptions.pdfCompatible = false;
  saveOptions.compressed = true;

  doc.saveAs(destFile, saveOptions);
}

saveCopyToPath();