

function exportAllArtboardsAsPNG() {
    if (app.documents.length === 0) {
        alert('Please open a document before running the script.');
        return;
    }

    var doc = app.activeDocument;
    var outputPath = Folder.selectDialog("Select the folder to save the PNG files:");
    if (outputPath === null) return;

    var desiredPPI = 300;
    var defaultPPI = 72;
    var scale = desiredPPI / defaultPPI;

    var exportOptions = new ExportOptionsPNG24();
    exportOptions.antiAliasing = false;
    exportOptions.artBoardClipping = true;
    exportOptions.transparency = false;
    exportOptions.matte = true;
    exportOptions.matteColor = new RGBColor();
    exportOptions.matteColor.red = 255;
    exportOptions.matteColor.green = 255;
    exportOptions.matteColor.blue = 255;

    for (var i = 0; i < doc.artboards.length; i++) {
        doc.artboards.setActiveArtboardIndex(i);
        var activeArtboard = doc.artboards[i];
        var originalArtboardRect = activeArtboard.artboardRect.slice(); // Copy original artboard bounds

        // Temporarily resize the artboard
        activeArtboard.artboardRect = [
            originalArtboardRect[0],
            originalArtboardRect[1],
            originalArtboardRect[0] + (originalArtboardRect[2] - originalArtboardRect[0]) * scale,
            originalArtboardRect[1] - (originalArtboardRect[1] - originalArtboardRect[3]) * scale
        ];

        var artboardName = activeArtboard.name;
        var destFile = new File(outputPath + "/" + artboardName + ".png");
        doc.exportFile(destFile, ExportType.PNG24, exportOptions);

        // Revert the artboard size to its original dimensions
        activeArtboard.artboardRect = originalArtboardRect;
    }

    alert("All artboards have been exported as PNG files.");
}

exportAllArtboardsAsPNG();
