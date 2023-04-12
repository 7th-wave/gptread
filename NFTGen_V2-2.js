var doc = app.activeDocument;

function exportAllArtboardsAsPNG() {
    if (app.documents.length === 0) {
        alert('Please open a document before running the script.');
        return;
    }

    var doc = app.activeDocument;
    var outputPath = Folder.selectDialog("Select the folder to save the PNG files:");
    if (outputPath === null) return;

    var exportOptions = new ExportOptionsPNG24();
    exportOptions.antiAliasing = false;
    exportOptions.artBoardClipping = true;
    var exportResolution = 72;
    exportOptions.verticalScale = (exportResolution / 300) * 100;
    exportOptions.horizontalScale = (exportResolution / 300) * 100;
    exportOptions.transparency = false;
    exportOptions.matte = true;
    exportOptions.matteColor = new RGBColor();
    exportOptions.matteColor.red = 255;
    exportOptions.matteColor.green = 255;
    exportOptions.matteColor.blue = 255;
    

    for (var i = 0; i < doc.artboards.length; i++) {
        doc.artboards.setActiveArtboardIndex(i);
        var activeArtboard = doc.artboards[i];
        var artboardName = activeArtboard.name;
        var destFile = new File(outputPath + "/" + artboardName + ".png");
        doc.exportFile(destFile, ExportType.PNG24, exportOptions);
    }

    alert("All artboards have been exported as PNG files.");
}

exportAllArtboardsAsPNG();
