

function saveCopyToPath() {
    if (app.documents.length === 0) {
        alert("Please open a document before running the script.");
        return;
    }

    var doc = app.activeDocument;
    var fileName = doc.name.replace(/\.[^.]*$/, "");
    var outputPath = Folder.selectDialog("Select the folder to save the copy:");

    if (outputPath === null) return;

    var destFile = new File(outputPath + "/" + fileName + "_copy.ai");

    var saveOptions = new IllustratorSaveOptions();
    saveOptions.compatibility = Compatibility.ILLUSTRATOR17;
    saveOptions.pdfCompatible = true;
    saveOptions.compressed = true;

    doc.saveAs(destFile, saveOptions);
}

saveCopyToPath();
