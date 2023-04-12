

function exportAllArtboardsAsPNGWithPPI() {
  var doc = app.activeDocument;
  var fileName = doc.name.replace(/\.[^.]*$/, "");

  var numArtboards = doc.artboards.length;
  var outputPath = new Folder().selectDlg("Select the folder to save the PNG files:");
  if (outputPath === null) return;

  var options = new ImageCaptureOptions();

  for (var i = 0; i < numArtboards; i++) {
    doc.artboards.setActiveArtboardIndex(i);

    var activeAB = doc.artboards[doc.artboards.getActiveArtboardIndex()];

    options.artBoardClipping = true;
    options.resolution = 300;
    options.antiAliasing = false;
    options.matte = true;

    // Set matte color to white
    options.matteColor = new RGBColor();
    options.matteColor.red = 255;
    options.matteColor.green = 255;
    options.matteColor.blue = 255;

    options.transparency = false;

    var artboardName = activeAB.name;

    var destFile = new File(outputPath + "/" + fileName + "_" + artboardName + ".png");

    doc.imageCapture(destFile, activeAB.artboardRect, options);
  }
}

exportAllArtboardsAsPNGWithPPI();
