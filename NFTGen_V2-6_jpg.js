

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
  var originalWidth, originalHeight;

  // Scale artboards up by the scaling factor
  for (var i = 0; i < numArtboards; i++) {
    doc.artboards.setActiveArtboardIndex(i);
    originalWidth = doc.width;
    originalHeight = doc.height;
    doc.resize(scalingFactor * 100, scalingFactor * 100, true, true, true, true, scalingFactor * 100, Transformation.DOCUMENTORIGIN);
  }

  // Export the artboards as JPEG files
  for (var i = 0; i < numArtboards; i++) {
    doc.artboards.setActiveArtboardIndex(i);
    var activeArtboard = doc.artboards[i];
    var artboardName = activeArtboard.name;
    var destFile = new File(outputPath + "/" + fileName + "_" + artboardName + ".jpg");
    doc.exportFile(destFile, ExportType.JPEG, exportOptions);
  }

  // Scale artboards back down to their original size
  for (var i = 0; i < numArtboards; i++) {
    doc.artboards.setActiveArtboardIndex(i);
    doc.resize(100 / scalingFactor * 100, 100 / scalingFactor * 100, true, true, true, true, 100 / scalingFactor * 100, Transformation.DOCUMENTORIGIN);
  }
}

exportAllArtboardsAsJPEGWithPPI();
