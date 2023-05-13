
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

    for (var i = 0; i < svgFiles.length; i++) {
        var svgFile = svgFiles[i];
        var symbolName = svgFile.name.replace(/\.svg$/, "");

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
        symbol.name = symbolName;

        for (var l = 0; l < pastedItems.length; l++) {
            pastedItems[l].remove();
        }
    }

    alert("Imported SVGs have been added to the symbol library.");
}

importSVGsAndCreateSymbolLibrary();
