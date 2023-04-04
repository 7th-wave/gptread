
/*

  Generate_NFT_Series_fro-ILLUSTRATOR.js for Adobe Illustrator
  Description:  The script lets you generate collection of different size , by randomly activating different traits.

  Date: August, 2022
  Author: AnimationGuides.com
  Website for help and more scripts: https://www.animationguides.com/
  Download Script at:

  Versions:
  1.0 Initial version
  
  NOTICE:
  Tested with Adobe Illustrator (Win).

  This script is provided "as is" without warranty of any kind.
  Free to use, Not for sale or distribution.
  
  Copyright(c) 2022 AnimationGuides.com
  
*/



//@include "./imports/json2.js";
//@target illustrator
//@targetengine main



/*--------------------   - Main Initialize -  -------------------*/

var allLayersList = app.activeDocument.layers;
//initilized, will contain all top layers that don't start with *
var allChangingLayersList=new Array();
//initilized, will later store the length of allChangingLayersList
var numberOfLayers = allLayersList.length;
var pathToSaveCollection = '';
//initilized, will be enetered by the user
var COLLECTION_SIZE = 1;
//initialized,will be calculated based on the document 
var MAX_POSSIBLE_COLLECTION_SIZE = 1;
//initialize, will contain collection info entered by the user
var META_NAME_DESC={};
//initilized, will be assigned by the user
var includeRaritiesBool=true;

//index of currently generated item
var currentItemGenerated = 0;

//Array with desired rarity info for each rait
var raritiesNumArray = new Array();
//Array that will store the number of trait appearances
var CreatedTraitsBasedOnRaritiesArray = new Array();
//Array that will hold trait numbers of all generated items
var PropertiesOfAllCreatedNFTS = new Array();

var problematicItems = new Array();
var identicalItemIndex=0;

var staticLayersPrefix='*';
var raritySuffix='%';



var fileURL = new File();
/*--------------------   -End Main Initialize -  -------------------*/




/*--------------------   - Main -  -------------------*/

filterLayersThatStartWithPrefix();
checkMaxCollectionSize();
showUserInfoWindow();
try {fileURL.remove(); } catch(e) {};


/*--------------------   - End Main -  -------------------*/



function filterLayersThatStartWithPrefix(){

    for (var i = 0; i < allLayersList.length; i++)
    {
        var layerName=app.activeDocument.layers[i].name;
        if (layerName.length > 0)
        {
            firstLetter = layerName.substring(0,1);
            if(firstLetter!==staticLayersPrefix)
            {
                if (app.activeDocument.layers[i].layers.length >0)
                {
                allChangingLayersList.push(app.activeDocument.layers[i]);
            }

            }

        }
        numberOfLayers=allChangingLayersList.length;

    }
}



function startGenerationProcess() {

    for (var i = 0; i < COLLECTION_SIZE; i++) {
        currentItemGenerated++;
        generateCollection();

    }

    generateProblemsDataJSON();
    showFinishedWindow();
}



function generateCollection() {
    
    var selectedtraits = new Array();
    var checkIfCreated = false;
    var cc = 0;

    while (!checkIfCreated && cc < 99) {
   
    selectedtraits = [];

        for (var i = 0; i < allChangingLayersList.length; i++) {
            var st = showTrait(allChangingLayersList[i], i);
            selectedtraits.push(st);
        }

        checkIfCreated = checkFullNFTIfExists(selectedtraits);

        cc++;

    }

    if (cc === 99)
    {

        var problematicItem={

            currentItemIndex: currentItemGenerated,
            samelItemIndex: identicalItemIndex,
        }

        problematicItems.push(problematicItem);
      
    }

   
    try {
        saveImage();
    } catch (e) { alert(e); }



}

function showTrait(curLayer, layerNum) {

    hideAllSubLayers(curLayer);

    randomTrait = Math.round(Math.random(curLayer.layers.length) * (curLayer.layers.length - 1));
    if(includeRaritiesBool)
    {
    var checker = checkBasedOnRarities(layerNum, randomTrait);
    while (checker != randomTrait)
    {
       
        randomTrait=checker;
        checker = checkBasedOnRarities(layerNum, randomTrait);
       
    }
    }

    CreatedTraitsBasedOnRaritiesArray[layerNum][randomTrait]++;

    curLayer.layers[randomTrait].visible = true;

    return randomTrait;

}
function createMetaData (ImgPath) {


var attributes =new Array();
var lastCreatedObjIndex=PropertiesOfAllCreatedNFTS.length-1;
var lastCreatedObj=PropertiesOfAllCreatedNFTS[lastCreatedObjIndex];

for (var i=0; i < allChangingLayersList.length;i++)
{
    
    var floatRarity= raritiesNumArray[i][lastCreatedObj[i]].selfRarity/raritiesNumArray[i][lastCreatedObj[i]].maxRarity;

    floatRarity=parseFloat(floatRarity).toFixed(3);
    
    if(includeRaritiesBool)
    {
    var atr = {

        layerName:allChangingLayersList[i].name,
        traitName:allChangingLayersList[i].layers[lastCreatedObj[i]].name.split(raritySuffix)[0],
        traitRarity:floatRarity, 
     }
    }
    else{

        var atr = {

            layerName:allChangingLayersList[i].name,
            traitName:allChangingLayersList[i].layers[lastCreatedObj[i]].name.split(raritySuffix)[0],
           
         }  
    }

     attributes.push(atr);

}


var  metaOBJ={};
metaOBJ.name=META_NAME_DESC.name;
metaOBJ.description=META_NAME_DESC.description;
metaOBJ.imagePath=pathToSaveCollection + "/" + app.activeDocument.name.split('.')[0] + ' ' + currentItemGenerated + '.png';
metaOBJ.generatedNum=currentItemGenerated;
metaOBJ.attributes=[];
Array.prototype.push.apply(metaOBJ.attributes, attributes);

var newMetaFile =new File(pathToSaveCollection + "/" + app.activeDocument.name.split('.')[0] +'_' +currentItemGenerated + ".json");

saveMetadata(metaOBJ,newMetaFile)

}



function saveMetadata(metaData,metafile) {
   
    metafile.open("w");
    metafile.write(JSON.stringify(metaData));
    metafile.close();

  }

function saveImage() {
    var imgFile = new File(pathToSaveCollection + "/" + app.activeDocument.name.split('.')[0] + ' ' + currentItemGenerated + '.jpg');
    var resolution = 300;
   
    var opts = new ImageCaptureOptions();
    opts.resolution = resolution;
    opts.antiAliasing = true;
    opts.transparency = true;

    opts.artBoardClipping = true;
  

   
    try {
        app.activeDocument.imageCapture(imgFile, app.activeDocument.geometricBounds, opts);

    } catch (e) {
     alert(e);
    }

    try {
    createMetaData(imgFile);
    
} catch (e) {

}
}



function showSelectSaveLocation() {
    
     var wrongEnterings=0;

    /*show window*/
    var myWindow = new Window("dialog",'Generate NFT Collection:  Location');
    
    var p = myWindow.add("panel");
    p.margins=20;
    p.text='Select A Folder Where You Want to Save Your Collection:';
    var p2 = p.add("panel");
    var g1 = p2.add("group");
    var btnAddFileInput = g1.add("button", undefined, "Folder...");
    btnAddFileInput.margins=10;
    var pathToFolerText= g1.add('statictext', undefined, '...');
    pathToFolerText.characters=40;
    var g2 = p2.add("group");
    var errorTip = g2.add('statictext', undefined, ' ');
    errorTip.characters=40;

    // creators area ///
  var myCreatorPanel=myWindow.add ('panel {text: "Created by AnimationGuides.com:", preferredSize: [400, 80]}');
  creatorButton = myCreatorPanel.add ('button', undefined, 'Visit for More Scripts and Assets');
  myCreatorPanel.alignChildren='center';
  myCreatorPanel.margins=20;
  
  creatorButton.onClick=function(){
      openURL( 'www.animationguides.com/' );
  }

 // creators area ///




    var g = p.add("group");
    p.alignChildren = ["right","top"]; 
    var btnGenerate = g.add("button", undefined, "Generate");
    var btnCancel = g.add("button", undefined, "Cancel");

    //what happens when  selecting file
    btnAddFileInput.onClick = function () {
        var f = Folder.selectDialog('Select Folder To Save Your Collection');
        if (f) {
            pathToSaveCollection = f.fullName;
            pathToFolerText.text=pathToSaveCollection;
        }
    }

    btnCancel.onClick = function () {
        try {fileURL.remove(); } catch(e) {};
        myWindow.close();

    }


    btnGenerate.onClick = function () {
     //check if folder selected
        if( pathToFolerText.text != '...')
     {
        try {
            startGenerationProcess();
        } catch (e) { alert(e); }
        
        myWindow.close();
    }

     else{
       //show hint
        errorTip.text='You need to select a Folder To Save Your Collection';
        
        if(wrongEnterings===0){
        var c1=g1;
        wrongEnterings++;
    }
    else{
        c1=p2;
    }

        var c2  = c1.graphics.newPen (c1.graphics.PenType.SOLID_COLOR, [0, 1, 0, 1], 1);
        c1.graphics.foregroundColor=c2;
      
        
     }

     }

    myWindow.show();
}




function checkMaxCollectionSize()
{
    for (var i = 0; i < allChangingLayersList.length; i++) {
        hideAllSubLayers(allChangingLayersList[i]);
        MAX_POSSIBLE_COLLECTION_SIZE *= allChangingLayersList[i].layers.length;
    }
    
}

function calculateInitialRaritiesBasedOnCollectionSize(){
   
    for (var i = 0; i < allChangingLayersList.length; i++) {

        var totalRaritiesForThisLayer = 0;

        var createdTraitsArray = new Array();
        var TraitsArray = new Array();

        for (var j = 0; j < allChangingLayersList[i].layers.length; j++) {
           
            //Initialize Created Nft Array
            createdTraitsArray.push(0);

            var layerName = allChangingLayersList[i].layers[j].name;
            var layerRarity =extractRarityValue(layerName,allChangingLayersList[i].layers.length);
            var currentRarityScore = { selfRarity: layerRarity, maxRarity: layerRarity, layerBasedRarity: 1 };
            TraitsArray.push(currentRarityScore);
            totalRaritiesForThisLayer += layerRarity;
           
        }

        for (var j = 0; j < allChangingLayersList[i].layers.length; j++) {
            var selfRarity = TraitsArray[j].selfRarity;
            TraitsArray[j].maxRarity = totalRaritiesForThisLayer;

            TraitsArray[j].layerBasedRarity = Math.ceil((selfRarity / totalRaritiesForThisLayer) * COLLECTION_SIZE);
           
        }

        raritiesNumArray.push(TraitsArray);
        CreatedTraitsBasedOnRaritiesArray.push(createdTraitsArray);



    }


}

function checkBasedOnRarities(layerNum, TraitNum) {

    
    var maxWantedOfThisTraitNum = raritiesNumArray[layerNum][TraitNum].layerBasedRarity;
    var createdOfThisTraitNum = CreatedTraitsBasedOnRaritiesArray[layerNum][TraitNum];
   
    if (createdOfThisTraitNum < maxWantedOfThisTraitNum) {
        //return true;
        return TraitNum;
    }

    //return false;
    var newT =findNextAvailable(layerNum, TraitNum);
    return newT;
}

function findNextAvailable(layerNum, TraitNum)
{
   var MaxValidTrait = allChangingLayersList[layerNum].layers.length-1;
   if  (TraitNum<MaxValidTrait)
   {
    TraitNum++;

   }
   else{
    TraitNum=0;

   }
   
   return TraitNum; 

}



function checkFullNFTIfExists(chosenTraits) {

    for (var i = 0; i < PropertiesOfAllCreatedNFTS.length; i++) {
        var numOFSame = 0;

        for (var j = 0; j < chosenTraits.length; j++) {
            if (chosenTraits[j] === PropertiesOfAllCreatedNFTS[i][j]) {
                numOFSame++;

            }
        }

        if (numOFSame === chosenTraits.length) {

            removeFromCreatedTraits(chosenTraits);
            identicalItemIndex=i;
            return false;
        }

    }


    PropertiesOfAllCreatedNFTS.push(chosenTraits);

    return true;

}

function removeFromCreatedTraits(chosenTraits) {
    for (var j = 0; j < chosenTraits.length; j++) {

        CreatedTraitsBasedOnRaritiesArray[j][chosenTraits[j]]--;

    }

}

function hideAllSubLayers(curLayer) {
    for (var i = 0; i < curLayer.layers.length; i++) {
        curLayer.layers[i].visible = false;
    }
}

function showUserInfoWindow() {

    /*show window*/
    var myWindow = new Window('dialog','Generate NFT Collection');
    var p = myWindow.add("panel");


    p.text= 'Enter The Size Of the Collection You want to Generate:';
    p.margins=20;
    
    
    var myInputGroup = p.add('group');
    myInputGroup.margins=10;
    myInputGroup.orientation = "row";
    myInputGroup.add('statictext', undefined, 'Collection Size :');
    var myTextSize = myInputGroup.add('edittext', undefined, '1');
    myTextSize.characters = 6;
    myTextSize.active = true;


    var cb = myInputGroup.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
      cb.text = "Include Rarities"; 
      cb.alignment = ["fill","top"];
      cb.value = true; 

    var g = p.add("group");
    p.alignChildren = ["right","top"]; 
    var btnNext = g.add("button", undefined, "Next");
   
  // creators area ///
  var myCreatorPanel=myWindow.add ('panel {text: "Created by AnimationGuides.com:", preferredSize: [400, 80]}');
   creatorButton = myCreatorPanel.add ('button', undefined, 'Visit for More Scripts and Assets');
   myCreatorPanel.alignChildren='center';
   myCreatorPanel.margins=20;
   
   creatorButton.onClick=function(){
       openURL( 'www.animationguides.com/' );
   }

  // creators area ///

    btnNext.onClick = function () {
        var  checkSizeString=transformInputToCollectionSize(myTextSize);
        try {fileURL.remove(); } catch(e) {};
        myWindow.close();
        if (checkSizeString)
        {
 

            if (COLLECTION_SIZE<MAX_POSSIBLE_COLLECTION_SIZE)
            {
            includeRaritiesBool=cb.value;
            showEnterCollectionInfoWindow();
            
            }
            else{

             showAlertWithOptions('The Collection Size You want to Generate is Larger than possible with your layers and traits combination');
        
            }

        }
        else{
            showAlertWithOptions('Collection size should only contain numbers');
        }
    
        
    }

    myWindow.show();
}


function transformInputToCollectionSize(sizeString)
{
 
   COLLECTION_SIZE=parseInt(sizeString.text); 

   if (!COLLECTION_SIZE)
   {
    COLLECTION_SIZE=1;
    //show error
    return false;
   }

   return true;
}



function showAlertWithOptions(alertMessage)
{
    var myWindow = new Window("dialog",'Generate NFT Collection: Notification');
    var p = myWindow.add("panel");
    var g = p.add("group");
    g.add('statictext', undefined, alertMessage);
    var btnTryAgain = g.add("button", undefined, "Try Again");
    var btnCancel = g.add("button", undefined, "CANCEL");

    

   



    btnCancel.onClick = function () {
       
        myWindow.close();
    } 

    btnTryAgain.onClick = function () {
        showUserInfoWindow() ;
      
        myWindow.close();
    } 
    myWindow.show();
}

function transformInputToCollectionSize(sizeString)
{
 
   COLLECTION_SIZE=parseInt(sizeString.text); 

   if (!COLLECTION_SIZE)
   {
    COLLECTION_SIZE=1;
    //show error
    return false;
   }

   return true;
}

function extractRarityValue(layerName,numOfTraits)
{
    var layerRarity = parseInt(layerName.substring(layerName.indexOf(raritySuffix) + 1));
    //if  not assigned or not defined properly
    if (!layerRarity)
    {
        layerRarity=Math.round(100/numOfTraits);
    }
    return layerRarity;
   
}


function showEnterCollectionInfoWindow()
{
   
    var myWindow = new Window("dialog",'Generate NFT Collection: Meta Data');
    var p = myWindow.add("panel");
    var g1 = p.add("group");
    g1.add('statictext', undefined, 'Give Your Collection a Name');
    var myTextColNAme = g1.add('edittext', undefined, app.activeDocument.name.split('.')[0]);
    myTextColNAme.characters = 46;
    myTextColNAme.active = true;


    var g2 = p.add("group");
    g2.add('statictext', undefined, 'Describe Your Collection');
    
    var myTextColDesc = g2.add('edittext',[0, 0,420, 60], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\ eiusmod tempor incididunt ut labore et...', {multiline:true}); 
  
    myTextColDesc.active = true;
    p.alignChildren = ["left","top"];
    

    var btnNext= g1.add("button", undefined, "Next");
   

// creators area ///
var myCreatorPanel=myWindow.add ('panel {text: "Created by AnimationGuides.com:", preferredSize: [400, 80]}');
creatorButton = myCreatorPanel.add ('button', undefined, 'Visit for More Scripts and Assets');
myCreatorPanel.alignChildren='center';
myCreatorPanel.margins=20;

creatorButton.onClick=function(){
    openURL( 'www.animationguides.com/' );
}

// creators area ///



    btnNext.onClick = function () {

        META_NAME_DESC.name=myTextColNAme.text;
        META_NAME_DESC.description=myTextColDesc.text;
        calculateInitialRaritiesBasedOnCollectionSize();
       var newMaxSize = maxCollectionSizeBasedOnRarities();
     
       if((COLLECTION_SIZE>newMaxSize ) && includeRaritiesBool)
       {
        alert( 'Best collection size based on provided rarities is ' +newMaxSize + '. The collection you are generating might contain duplicates.');
       }
       
        showSelectSaveLocation();
        try {fileURL.remove(); } catch(e) {};
        myWindow.close();
    } 

     
    myWindow.show();
}


function generateProblemsDataJSON(){
    if(problematicItems.length>0)
    {
    var problemfile = new File(pathToSaveCollection + "/" + '000_Problems_Data' + ".json");

    
    var allProblemsData=new Array();
    var genProblemData = {};
    genProblemData.totalProblems="Total Number of Problems that occured during the generation process is " + problematicItems.length;
    allProblemsData.push(genProblemData);

    for (var i = 0; i < problematicItems.length; i++) {
        
        var problemsData={};
        var issue=i+1;
        problemsData.IssueNum='issue #' + issue;
        var pindex=problematicItems[i].currentItemIndex;
        var iindex=problematicItems[i].samelItemIndex;
        problemsData.ProblemDescription='Generated Item num '+pindex +' is identical to previously generated item num '+ iindex;
        allProblemsData.push(problemsData);
    }
   
    
    saveMetadata(allProblemsData,problemfile);
    }

}


function maxCollectionSizeBasedOnRarities ()
{

    var maxSize=1;
    
    for (var i = 0; i < allChangingLayersList.length; i++)
    {
        var averageTraits=0;
        for (var j = 0; j < raritiesNumArray[i].length; j++)
        {
         
         var fR= raritiesNumArray[i][j].selfRarity/raritiesNumArray[i][j].maxRarity;

         var avgR=100/allChangingLayersList[i].layers.length;
         
         avgR=avgR/100;
        
         if( fR >= avgR)
         {

            averageTraits++;
         }

        }
        if( averageTraits>0)
        {
        maxSize=maxSize*averageTraits;
        }
     

    }
   
   return maxSize;

}

function openURL(weblink) {

    if (Folder.fs == "Windows"){
    fileURL= File( Folder.temp + '/aiOpenURL.url' );
     fileURL.open("w");
     fileURL.write( '[InternetShortcut]' + '\r' + 'URL=https://' + weblink + '\r' );
     fileURL.close();
    }
    else if(Folder.fs == "Macintosh")
    {
        fileURL = File( Folder.temp + "/aiOpenURL.webloc" ); 
        fileURL.open( "w" ); 
        fileURL.write("<?xml version='1.0' encoding='UTF-8'?>"+"\n");
        fileURL.write("<!DOCTYPE plist PUBLIC '-//Apple//DTD PLIST 1.0//EN' 'http://www.apple.com/DTDs/PropertyList-1.0.dtd'>"+"\n");
        fileURL.write("<plist version='1.0'><dict><key>URL</key>"+"\n");
        fileURL.write("<string>https://"+ address + "</string>"+"\n");
        fileURL.write("</dict></plist>"+"\n");
        fileURL.close(); 


    }
    fileURL.execute();
};

function showFinishedWindow()
{

   alert('Congratulations! A Collection Was Generated!'); 
}











