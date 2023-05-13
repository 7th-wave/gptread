

function placeSymbolInstancesFromLibrary() {
    if (app.documents.length === 0) {
        alert("Please open a document before running the script.");
        return;
    }

    var currentDoc = app.activeDocument;
    var libraryName = "qrsLibrary_4";
    var librarySymbols;

    // Find the symbol library with the specified name
    for (var i = 0; i < currentDoc.symbolLibraries.length; i++) {
        if (currentDoc.symbolLibraries[i].name === libraryName) {
            librarySymbols = currentDoc.symbolLibraries[i].symbols;
            break;
        }
    }

    if (!librarySymbols) {
        alert("Symbol library '" + libraryName + "' not found in the current document.");
        return;
    }

    var xPos = 0;
    var yPos = 0;
    var symbolSpacing = 10;

    // Place symbol instances from the library
    for (var i = 0; i < librarySymbols.length; i++) {
        var symbolInstance = currentDoc.symbolItems.add(librarySymbols[i]);
        symbolInstance.position = [xPos, yPos];

        xPos += symbolSpacing;
    }
}

placeSymbolInstancesFromLibrary();
