// Display a dialog box to select the folder containing the AI files
var folder = Folder.selectDialog("Select the folder containing the AI files");

// Check if a folder was selected
function selectFolder() {
    if (!folder) {
        alert("No folder selected. Script will now exit.");
        return;
    }
}

// Define the name of the action to run
var actionName = "HootiesExportPNG";

// Get a list of all files in the folder
var files = folder.getFiles("*.ai");

// Loop through each file in the folder
for (var i = 0; i < files.length; i++) {
    var file = files[i];
    
    // Open the AI file
    var doc = app.open(file);
    
    // Check if the action exists
    var action = app.actions.getByName(actionName);
    if (!action.isValid) {
        alert("Action not found: " + actionName);
        continue;
    }
    
    // Run the action on the document
    doc.doScript(action, ScriptLanguage.JAVASCRIPT, [], UndoModes.ENTIRE_SCRIPT, actionName);
    
    // Save and close the document
    doc.save();
    doc.close();
}

// Display a success message
alert("Action applied to all AI files successfully!");











#target Illustrator

// Display a dialog box to select the folder containing the AI files
var folder = Folder.selectDialog("Select the folder containing the AI files");

// Check if a folder was selected
if (folder == null || folder == undefined) {
    alert("No folder selected. Script will now exit.");
    return;
}

// Define the name of the action to run
var actionName = "My Action";
var actionSetName = "My Action Set";
var actionSetPath = "/path/to/action/set/My Action Set.aia";

// Load the action set that contains the action
app.loadAction(actionSetName, actionSetPath);

// Get a list of all files in the folder
var files = folder.getFiles("*.ai");

// Loop through each file in the folder
for (var i = 0; i < files.length; i++) {
    var file = files[i];
    
    // Open the AI file
    var doc = app.open(file);
    
    // Check if the action exists
    var action = app.actions.getByName(actionName);
    if (!action.isValid) {
        alert("Action not found: " + actionName);
        continue;
    }
    
    // Run the action on the document
    doc.doScript(action, ScriptLanguage.JAVASCRIPT, [], UndoModes.ENTIRE_SCRIPT, actionName);
    
    // Save and close the document
    doc.save();
    doc.close();
}

// Display a success message
alert("Action applied to all AI files successfully!");
