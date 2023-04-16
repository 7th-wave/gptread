var doc = app.activeDocument;

// Get all layers in the document
var layers = doc.layers;
var numberOfHotties = 20;
var tts = 'tts_';
var tittyLayers = '#tts_';
var logos = 'ttlogo_';
var logoLayer = '#ttlogo_';
log("Start!");
log("Layer Size: " + layers.length);
var ttsLayers = [];
var otherLayers = [];
var pathToSaveCollection = '';
var folderName = "Hotties"; // Replace this with the desired folder name
var selectedFolder;
var rarityScoreCache, ttsSymbols, symbolsLayers, logoLayers, logoRarityScoreCache, logoSymbols;
var serialNumbers = [];
var layerName = "qrs_Hood";
var qrlayer = doc.layers.getByName(layerName);

var downloadsFolder;

function getSerials() {
  var serials = [];
  var serialsFile = File.openDialog("Select the serial numbers file:");
  if (serialsFile !== null) {
    serialsFile.open("r");
    while (!serialsFile.eof) {
      var line = serialsFile.readln();
      serials.push(line);
    }
    serialsFile.close();
    return serials;
  } else {
    log("No serials file found.");
  }
  
}

function isValidSVG(svgFile) {
  try {
    var xml = new XML(svgFile);
    // Check if the root element is an 'svg' element
    return xml.localName() === 'svg';
  } catch (error) {
    // Parsing failed, so the SVG file is not valid
    return false;
  }
}

function swapCode(image) {
  var existingPlacedItem = null;
  
  var groupItems = qrlayer.groupItems;
  log("groupItems: " + groupItems.length);
  var originalGroup = groupItems[0];
  var groupPosition = originalGroup.position;
  var groupWidth = originalGroup.width;
  var groupHeight = originalGroup.height;

  // Remove the existing group
  originalGroup.remove();

  // Replace the file path below with the path to your new SVG file

  try {
      var placedItem = qrlayer.groupItems.createFromFile(image);

      // Set the position, width, and height of the new placed item to match the original group
      placedItem.position = groupPosition;
      placedItem.width = groupWidth;
      placedItem.height = groupHeight;
  } catch (e) {
      // Log the error message (optional)
      log("Not placed QR: " + image.name)
  }
  
  
}


function startProcess() {
  var currentItemGenerated = 1;

  serialNumbers = getSerials();

  selectedFolder = Folder.selectDialog("Choose a folder:");

  if (selectedFolder !== null) {
      // Define the folder name
      folderName = "Hotties"; // Replace this with the desired folder name

      // Call the function to create the folder
      createFolder(selectedFolder, folderName);
  } else {
    log("No folder selected.");
  }

  log("numberOfHotties: " + serialNumbers.length + "");
  log("-- currentItemGenerated: " + currentItemGenerated + "--");
  var downloadsFolder = Folder.selectDialog("Select the Downloads folder:");

  for (var i = 0; i < numberOfHotties; i++) {
    log("serialNumbers[i]: " + serialNumbers[i]);
    var qrPath = downloadsFolder + '/hootie-'+serialNumbers[i]+'.svg';
    var qrImage = File(qrPath);
    qrImage.open("r");
    var qrContent = qrImage.read();
    if (qrImage.exists && isValidSVG(qrContent)) {
      //log("QR: " + qrImage);
      swapCode(qrImage);
    } else {
      log("QR image not found or invalid: " + qrPath);
    }
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
  var actionName = "HootiesExportPNG";
  var actionSetName = "HootiesExportPNG";

  // Execute the action
  app.doScript(actionName, actionSetName);

}


function saveCopyToPath(currentItemGenerated) {
  if (app.documents.length === 0) {
      alert("Please open a document before running the script.");
      return;
  }

  var doc = app.activeDocument;
  var fileName = 'hottie';

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