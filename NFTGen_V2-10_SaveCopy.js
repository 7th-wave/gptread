var doc = app.activeDocument;

// Get all layers in the document
var layers = doc.layers;
var numberOfHotties = 2;
var tts = 'tts_';
var includeLayers = '#';
var logos = 'logos_';
log("Start!");
log("Layer Size: " + layers.length);
var ttsLayers = [];
var otherLayers = [];
var pathToSaveCollection = '';
var folderName = "Hotties"; // Replace this with the desired folder name
var selectedFolder;

function startProcess() {
  var currentItemGenerated = 0;

  selectedFolder = Folder.selectDialog("Choose a folder:");

  if (selectedFolder !== null) {
      // Define the folder name
      folderName = "Hotties"; // Replace this with the desired folder name

      // Call the function to create the folder
      createFolder(selectedFolder, folderName);
  } else {
    log("No folder selected.");
  }

  log("numberOfHotties: " + numberOfHotties + "");

  for (var i = 0; i < numberOfHotties; i++) {
    swapSymbols();
    saveCopyToPath();
    currentItemGenerated++;
  }
}

function createFolder(folderPath, folderName) {
  var newFolder = new Folder(folderPath + "/" + folderName);

  if (!newFolder.exists) {
      newFolder.create();
      log("Folder created at: " + newFolder.fsName);
  } else {
    log("Folder already exists at: " + newFolder.fsName);
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
      var symbol = sublayers[j].symbol;

      // Get all symbols from the document
      var symbols = doc.symbols;

      // Filter symbols to only include those with tts in their name
      var ttsSymbols = [];

      // Loop through the symbols and add the ones containing 'tts' in their names to the ttsSymbols array
      for (var i = 0; i < symbols.length; i++) {
          if (symbols[i].name.indexOf('tts') !== -1) {
              ttsSymbols.push(symbols[i]);
          }
      }

      // Sort symbols by rarity score in ascending order
      ttsSymbols.sort(function(sym1, sym2) {
        var sym1Score = extractRarityValue(sym1.name);
        var sym2Score = extractRarityValue(sym2.name);
        return sym1Score - sym2Score;
      });

      // Get the index of the current symbol
      var currentIndex = -1;
      for (var i = 0; i < ttsSymbols.length; i++) {
          if (ttsSymbols[i] === symbol) {
              currentIndex = i;
              break;
          }
      }

      // Determine the number of times the current symbol should be swapped
      var rarityScore = extractRarityValue(symbol.name);
      var numberOfSwaps = Math.ceil(1 / rarityScore);

      log("Number of swaps: " + numberOfSwaps);

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
  var logFile = new File(Folder.desktop + "/swap_log.txt");
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

  if (outputPath === null) return;

  var destFile = new File(selectedFolder + "/" + folderName + "/" + fileName + "_copy.ai");

  var saveOptions = new IllustratorSaveOptions();
  saveOptions.compatibility = Compatibility.ILLUSTRATOR2007;
  saveOptions.pdfCompatible = true;
  saveOptions.compressed = true;

  doc.saveAs(destFile, saveOptions);
}

function extractRarityValue(symbol)
{
    
    var data = symbol.split("_");
    log("Name: " + symbol);

    
    if (data.length == 6) {
      var layerRarity = data[5].split("-");
      return layerRarity[1];
    } else {
      return '';
    }
   
}

startProcess();