

function exportAllArtboardsAsJPEGWithPPI() {
    var doc = app.activeDocument;
    var fileName = doc.name.replace(/\.[^.]*$/, "");

    var numArtboards = doc.artboards.length;
    var outputPath = Folder.selectDialog("Select the folder to save the JPEG files:");
    if (outputPath === null) return;

    var exportOptions = new ExportOptionsJPEG();
    exportOptions.antiAliasing = false;
    exportOptions.qualitySetting = 100;
    exportOptions.optimization = true;
    exportOptions.colorSpace = ImageColorSpace.RGB;
    exportOptions.artBoardClipping = true;
    exportOptions.matte = false;

    // Calculate the scaling factor for 300 DPI
    var scalingFactor = 300 / 72;

    // Scale artboards up by the scaling factor and export them as JPEG files
    for (var i = 0; i < numArtboards; i++) {
        doc.artboards.setActiveArtboardIndex(i);
        var activeArtboard = doc.artboards[i];
        var artboardName = activeArtboard.name;

        // Scale up the artboard and its contents
        scaleArtboardAndContents(scalingFactor, activeArtboard);

        // Export the artboard as a JPEG file
        var destFile = new File(outputPath + "/" + fileName + "_" + artboardName + ".jpg");
        doc.exportFile(destFile, ExportType.JPEG, exportOptions);

        // Scale the artboard and its contents back down to the original size
        scaleArtboardAndContents(1 / scalingFactor, activeArtboard);
    }
}

function scaleArtboardAndContents(scaleFactor, artboard) {
    var doc = app.activeDocument;
    var artboardRect = artboard.artboardRect;

    // Scale the artboard
    var newWidth = (artboardRect[2] - artboardRect[0]) * scaleFactor;
    var newHeight = (artboardRect[1] - artboardRect[3]) * scaleFactor;
    artboard.artboardRect = [
        artboardRect[0],
        artboardRect[1],
        artboardRect[0] + newWidth,
        artboardRect[1] - newHeight
    ];

    // Scale the artboard's contents
    doc.selectObjectsOnActiveArtboard();
    var group = doc.groupItems.add();
    for (var i = 0; i < doc.selection.length; i++) {
        doc.selection[i].move(group, ElementPlacement.INSIDE);
    }
    group.resize(scaleFactor * 100, scaleFactor * 100, true, true, true, true, scaleFactor * 100, Transformation.CENTER);
    group.ungroup();
}

exportAllArtboardsAsJPEGWithPPI();
