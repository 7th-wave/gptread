// Initialize variables
var doc = app.activeDocument;
var allLayers = doc.layers;
var nftLayers = [];
var collectionSize = 10; // User-defined collection size
var outputFolder = Folder.selectDialog("Select output folder");

// Rarity distribution example (adjust according to your needs)
var rarities = [
  { value: 0, weight: 50 },
  { value: 1, weight: 30 },
  { value: 2, weight: 15 },
  { value: 3, weight: 5 },
];

// Metadata storage
var metadata = [];

// Filter layers
log("Filtering layers");
for (var i = 0; i < allLayers.length; i++) {
  var layer = allLayers[i];
  if (layer.name.charAt(0) !== "*") {
    nftLayers.push(layer);
  }
}
log("Filtered layers: " + nftLayers.length);

// Generate NFTs
log("Generating NFTs");
for (var nftIndex = 0; nftIndex < collectionSize; nftIndex++) {
  log("Generating NFT " + (nftIndex + 1));
  var nftMetadata = [];
  for (var layerIndex = 0; layerIndex < nftLayers.length; layerIndex++) {
    var layer = nftLayers[layerIndex];
    var randomSymbolIndex = weightedRandom(rarities, layer.symbolItems.length);
    log("Swapping symbols for layer " + layer.name);
    swapSymbols(layer.symbolItems[0], layer.symbolItems[randomSymbolIndex]);
    nftMetadata.push({ layer: layer.name, symbol: randomSymbolIndex });
  }

  // Save generated NFT image
  log("Saving NFT " + (nftIndex + 1) + " as PNG");
  var outputFile = new File(outputFolder + "/NFT_" + (nftIndex + 1) + ".png");
  saveAsPNG(outputFile);

  // Add metadata for the current NFT
  log("Adding metadata for NFT " + (nftIndex + 1));
  metadata.push(nftMetadata);
}
log("NFT generation completed");

// Export metadata as JSON
log("Exporting metadata");
var metadataFile = new File(outputFolder + "/metadata.json");
metadataFile.open("w");
metadataFile.write(JSON.stringify(metadata, null, 2));
metadataFile.close();
log("Metadata exported");

// Custom log function
function log(message) {
  var logFile = new File(Folder.desktop + "/script_log.txt");
  logFile.open("a");
  logFile.writeln(new Date().toLocaleString() + ": " + message);
  logFile.close();
}

// Function to swap symbol positions
function swapSymbols(symbol1, symbol2) {
  var tempPosition = symbol1.position;
  symbol1.position = symbol2.position;
  symbol2.position = tempPosition;
}

// Function to save the current document view as a PNG
function saveAsPNG(file) {
  var exportOptions = new ExportOptionsPNG24();
  exportOptions.horizontalScale = 100.0;
  exportOptions.verticalScale = 100.0;
  exportOptions.antiAliasing = true;
  exportOptions.transparency = true;
  exportOptions.artBoardClipping = true;

  doc.exportFile(file, ExportType.PNG24, exportOptions);
}

// Function to select a weighted random index
function weightedRandom(rarities, maxIndex) {
    log("Calculating weighted random index");
    
    var totalWeight = rarities.reduce(function (prev, curr) {
      return prev + curr.weight;
    }, 0);
  
    var random = Math.random() * totalWeight;
    var current = 0;
  
    for (var i = 0; i < rarities.length; i++) {
      current += rarities[i].weight;
      if (random <= current) {
        var value = rarities[i].value;
        var selectedIndex = value < maxIndex ? value : maxIndex - 1;
        
        log("Selected index: " + selectedIndex);
        return selectedIndex;
      }
    }
  
    var fallbackIndex = maxIndex - 1;
    log("Selected index (fallback): " + fallbackIndex);
    return fallbackIndex;
  }
  
  // Function to log messages
  function log(message) {
    var logFile = new File(Folder.desktop + "/script_log.txt");
    logFile.open("a");
    logFile.writeln(new Date().toLocaleString() + ": " + message);
    logFile.close();
  }

  // Function to select a weighted random index
function weightedRandom(rarities, maxIndex) {
    log("Rarities: " + JSON.stringify(rarities));
    log("Calculating weighted random index");
    
    if (!Array.isArray(rarities)) {
      log("Error: rarities variable is not an array");
      return maxIndex - 1;
    }
  
    log("Rarities array length: " + rarities.length);
    log("Rarities array content: " + JSON.stringify(rarities));
  
    var totalWeight = rarities.reduce(function (prev, curr) {
      return prev + curr.weight;
    }, 0);
  
    var random = Math.random() * totalWeight;
    var current = 0;
  
    for (var i = 0; i < rarities.length; i++) {
      current += rarities[i].weight;
      if (random <= current) {
        var value = rarities[i].value;
        var selectedIndex = value < maxIndex ? value : maxIndex - 1;
        
        log("Selected index: " + selectedIndex);
        return selectedIndex;
      }
    }
  
    var fallbackIndex = maxIndex - 1;
    log("Selected index (fallback): " + fallbackIndex);
    return fallbackIndex;
  }
  