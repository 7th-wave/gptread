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
var rarityScoreCache = {};

function startProcess() {
  var currentItemGenerated = 0;

  /*selectedFolder = Folder.selectDialog("Choose a folder:");

  if (selectedFolder !== null) {
      // Define the folder name
      folderName = "Hotties"; // Replace this with the desired folder name

      // Call the function to create the folder
      createFolder(selectedFolder, folderName);
  } else {
    log("No folder selected.");
  }*/

  log("numberOfHotties: " + numberOfHotties + "");

  for (var i = 0; i < numberOfHotties; i++) {
    genRarityScores();
    currentItemGenerated++;
  }
}



function genRarityScores(layer) {
  var doc = app.activeDocument;

  var symbols = doc.symbols;

    // Filter symbols to only include those with tts in their name
    var ttsSymbols = [];

    // Loop through the symbols and add the ones containing 'tts' in their names to the ttsSymbols array
    for (var i = 0; i < symbols.length; i++) {
        if (symbols[i].name.indexOf('tts') !== -1) {
            ttsSymbols.push(symbols[i]);

            //cache rarity score
            rarityScoreCache[symbol.name] = extractRarityValue(symbol.name);

        }
    }

    // Sort symbols by rarity score in ascending order
    ttsSymbols.sort(function(sym1, sym2) {
        var sym1Score = rarityScoreCache[sym1.name];
        var sym2Score = rarityScoreCache[sym2.name];
        return sym1Score - sym2Score;
    });

    for (var i = 0; i < ttsSymbols.length; i++) {
        if (ttsSymbols[i] === symbol) {
            currentIndex = i;
            break;
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