function importSVGsAndCreateSymbolLibrary() {
  if (app.documents.length === 0) {
    alert("Please open a document before running the script.");
    return;
  }

  var doc = app.activeDocument;
  var inputFolder = Folder.selectDialog("Select the folder containing the SVG files:");

  if (inputFolder === null) return;

  var svgFiles = inputFolder.getFiles("*.svg");

  if (svgFiles.length === 0) {
    alert("No SVG files found in the selected folder.");
    return;
  }

  var symbolsAdded = 0;

  for (var i = 0; i < svgFiles.length; i++) {
    var svgFile = svgFiles[i];
    var symbolName = "ttqr_" + svgFile.name.replace(/\.svg$/, "");

    // Check if symbol with the same name already exists
    var existingSymbol = null;
    for (var j = 0; j < doc.symbolItems.length; j++) {
      if (doc.symbolItems[j].name === symbolName) {
        existingSymbol = doc.symbolItems[j];
        break;
      }
    }

    if (existingSymbol != null) {
      alert("Symbol with name '" + symbolName + "' already exists. Skipping...");
      continue;
    }

    app.open(svgFile);
    var importedDoc = app.activeDocument;
    var itemsToCopy = [];

    for (var j = 0; j < importedDoc.pageItems.length; j++) {
      itemsToCopy.push(importedDoc.pageItems[j]);
    }

    importedDoc.selection = itemsToCopy;
    app.copy();
    importedDoc.close(SaveOptions.DONOTSAVECHANGES);

    doc.activate();
    app.paste();
    var pastedItems = [];

    for (var k = 0; k < doc.selection.length; k++) {
      pastedItems.push(doc.selection[k]);
    }

    var symbol = doc.symbols.add(pastedItems[0]);

    // Rename symbol if necessary
    if (symbol.name !== symbolName) {
      var nameSuffix = 2;
      var uniqueNameFound = false;
      while (!uniqueNameFound) {
        var newName = symbolName + "_" + nameSuffix;
        var symbolExists = false;
        for (var l = 0; l < doc.symbolItems.length; l++) {
          if (doc.symbolItems[l].name === newName) {
            symbolExists = true;
            break;
          }
        }
        if (!symbolExists) {
          symbol.name = newName;
          uniqueNameFound = true;
        }
        else {
          nameSuffix++;
        }
      }
    }

    for (var l = 0; l < pastedItems.length; l++) {
      pastedItems[l].remove();
    }

    symbolsAdded++;

    if (symbolsAdded % 50 === 0) {
      var saveOptions = new IllustratorSaveOptions();
      saveOptions.compatibility = Compatibility.ILLUSTRATOR17;
      saveOptions.pdfCompatible = false;
      saveOptions.compressed = true;
      doc.saveAs(doc.fullName, saveOptions);
    }
  }

  alert("Imported SVGs have been added to the symbol library.");
}

importSVGsAndCreateSymbolLibrary();
