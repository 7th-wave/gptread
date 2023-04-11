
var doc = app.activeDocument;

// Get all layers in the document
var layers = doc.layers;
var tts = 'tts_';
var includeLayers = '#';
var logos = 'logos_';
log("Start!");
log("Layer Size: " + layers.length);
var ttsLayers = [];
var otherLayers = [];
var pathToSaveCollection = '';

function sartProcess() {
  var numberOfHotties = 1;
  var currentItemGenerated = 0;
  for (var i = 0; i < numberOfHotties; i++) {
    swapSymbols();
    //saveImage('hottie_' + currentItemGenerated);
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


function saveImage(docName) {
  var num_artboards =  app.activeDocument.artboards.length;
  var options = new ImageCaptureOptions();
  var saveOptions = new IllustratorSaveOptions();
  saveOptions.pdfCompatible = false;
  //var aiFile = new File(pathToSaveCollection + "/" + docName + "_" + '.ai');
  // app.activeDocument.saveAs(aiFile, saveOptions)
  for (var i = 0; i < num_artboards; i++ ) {
      var artboardName = app.activeDocument.artboards[i].name;
      app.activeDocument.artboards.setActiveArtboardIndex(i);
      var activeAB = app.activeDocument.artboards[app.activeDocument.artboards.getActiveArtboardIndex()];
      var imgFile = new File(Folder.desktop + "/" + docName + "_" + artboardName + '.png');
      options.artBoardClipping = true;
      options.resolution = 300;
      options.antiAliasing = true;
      options.transparency = false;
      options.PDFCompatible = false;
      try {
          app.activeDocument.imageCapture(imgFile, activeAB.artboardRect, options);
      } catch (e) {
      alert(e);
      }

      try {
      createMetaData(imgFile);
      
  } catch (e) {

  }
  }
  
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

sartProcess();