var doc = app.activeDocument;

// Get all layers in the document
var layers = doc.layers;
var numberOfHotties = 4;
var tts = 'tts_';
var tittyLayers = '#tts_';
var logos = 'ttlogo_';
var logoLayer = '#ttlogo_';
log("Start!");
log("Layer Size: " + layers.length);
var ttsLayers = [];
var otherLayers = [];
var pathToSaveCollection = '';
var folderName = "Hooties"; // Replace this with the desired folder name
var selectedFolder;
var rarityScoreCache, ttsSymbols, symbolsLayers, logoLayers, logoRarityScoreCache, logoSymbols;

function startProcess() {
  var currentItemGenerated = 0;

  selectedFolder = Folder.selectDialog("Choose a folder:");

  if (selectedFolder !== null) {
      // Define the folder name
      folderName = "Hooties"; // Replace this with the desired folder name

      // Call the function to create the folder
      createFolder(selectedFolder, folderName);
  } else {
    log("No folder selected.");
  }

  log("numberOfHotties: " + numberOfHotties + "");
  log("-- currentItemGenerated: " + currentItemGenerated + "--");

  for (var i = 0; i < numberOfHotties; i++) {
    ttsLayers = [];
    logoLayers = [];
    symbolsLayers = 0;

    var genRarity = genRarityScores(tts, 5);
    rarityScoreCache = genRarity.cache;
    ttsSymbols = genRarity.symbols;
    swapSymbols(ttsSymbols, tittyLayers);

    log("---swaplogos");

    var logoGenRarity = genRarityScores(logos, 2);
    logoRarityScoreCache = logoGenRarity.cache;
    logoSymbols = logoGenRarity.symbols;
    swapSymbols(logoSymbols, logoLayer);


    log("------------------------");
    log("Symbols layers: " + symbolsLayers);
    saveCopyToPath(currentItemGenerated);
    runAction();
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

function swapSymbols(symbols, layerPrefix) {
  // Get active document
  var selectedLayers = [];
  log("Prefix: " + layerPrefix);

  // Iterate over each layer in the document
  for (var i = 0; i < layers.length; i++) {
    // Get the sublayers in the current layer
    var layerName = layers[i].name;
    
    if (layerName.indexOf(layerPrefix) > -1) {
      selectedLayers.push(layers[i]);
    }
  }

  if (layers.length > 0) {
    symbolsLayers = 0;

    for (var i = 0; i < selectedLayers.length; i++) {
      swapLayerSymbols(selectedLayers[i], symbols);
    }
  }


}



function swapLayerSymbols(layer, symbols) {

  var sublayers = layer.symbolItems;
  log("Layer: " + layer.name + " Sublayers: " + sublayers.length);
  symbolsLayers += sublayers.length;
    // Iterate over each sublayer
    for (var j = 0; j < sublayers.length; j++) {
      
      // Get the symbol in the current sublayer
      log("Layer: " + layer.name + " Sublayer: " + sublayers[j].symbol);
      var symbol = sublayers[j].symbol;
      

      // Get the index of the current symbol
      var currentIndex = -1;
      for (var i = 0; i < symbols.length; i++) {
          if (symbols[i] === symbol) {
              currentIndex = i;
              break;
          }
      }

      log("Current index" + currentIndex + " - Symbol: " + symbol.name); 

      var nextIndex = (currentIndex + 1) % symbols.length;
      var nextSymbol = symbols[nextIndex];
      log("Tts length: " + symbols.length);
      log("Next index: " + nextIndex);
      log("Next symbol: " + nextSymbol);
      log("Next symbol name: " + (nextSymbol ? nextSymbol.name : "undefined"));

      sublayers[j].symbol = nextSymbol;
      sublayers[j].name = nextSymbol.name;
      currentIndex = nextIndex;
    }
}

function genRarityScores(prefix, index) {

  var symbols = doc.symbols;
  var layers = [];
  var cache = {};

    for (var i = 0; i < symbols.length; i++) {
        if (symbols[i].name.indexOf(prefix) !== -1) {
            layers.push(symbols[i]);

            //cache rarity score
            cache[symbols[i].name] = extractRarityValue(symbols[i].name, index);

        }
    }

    // Sort symbols by rarity score in ascending order
    layers.sort(function(sym1, sym2) {
        var sym1Score = cache[sym1.name];
        var sym2Score = cache[sym2.name];
        return sym1Score - sym2Score;
    });

    return { cache: cache, symbols: layers }

}


// Function to log messages
function log(message) {
  var logFile = new File(Folder.desktop + "/swap_log.txt");
  logFile.open("a");
  logFile.writeln(new Date().toLocaleString() + ": " + message);
  logFile.close();
}

function runAction() {
  // Replace these values with the names of your action and action set
  var actionName = "HootExpPNG";
  var actionSetName = "HootExpPNG";

  // Execute the action
  app.doScript(actionName, actionSetName);

}


function saveCopyToPath(currentItemGenerated) {
  if (app.documents.length === 0) {
      alert("Please open a document before running the script.");
      return;
  }

  var doc = app.activeDocument;
  var fileName = doc.name.replace(/\.[^.]*$/, "");

  var destFile = new File(selectedFolder + "/" + folderName + "/" + fileName + "_" + currentItemGenerated + ".ai");

  var saveOptions = new IllustratorSaveOptions();
  saveOptions.pdfCompatible = false;
  saveOptions.compressed = true;

  doc.saveAs(destFile, saveOptions);
}

function extractRarityValue(symbol, index)
{
    
    var data = symbol.split("_");
    
    if (data.length == 6) {
      var layerRarity = data[index].split("-");
      return layerRarity[1];
    } else {
      return '';
    }
   
}

startProcess();