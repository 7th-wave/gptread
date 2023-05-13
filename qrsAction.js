function main() {
    var folder = Folder.selectDialog('Select the folder containing SVG files:');
    if (!folder) {
        return;
    }

    var actionSetName = 'HootQRFlatSize'; // Replace with the name of your action set
    var actionName = 'HootQRFlatSize'; // Replace with the name of your action

    var files = folder.getFiles('*.svg');
    if (files.length === 0) {
        alert('No SVG files found in the selected folder.');
        return;
    }

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var doc = app.open(file);

        app.doScript(actionName, actionSetName);
        
    }

    alert('Action applied to all SVG files in the folder.');
}

main();
