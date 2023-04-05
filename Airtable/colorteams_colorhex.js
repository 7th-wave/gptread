// Change this name to use a different table
let table = base.getTable("Hooties 64");


// Define the color mapping
const colorMapping = [
        { ColorHex: "#DDC0AC", ColorTeam: "PeCans", ColorSkin: "#B7896A", ColorRarity: 6.94 },
        { ColorHex: "#FCDACA", ColorTeam: "ButterUdders", ColorSkin: "#F9BE9D", ColorRarity: 8.33 },
        { ColorHex: "#FFE1B6", ColorTeam: "TataColadas", ColorSkin: "#F9C87A", ColorRarity: 7.63 },
        { ColorHex: "#E2DD40", ColorTeam: "LimeJellies", ColorSkin: "#377813", ColorRarity: 1.38 },
        { ColorHex: "#8AC17B", ColorTeam: "GreenTeatea", ColorSkin: "#31872F", ColorRarity: 1.38 },
        { ColorHex: "#70E2B4", ColorTeam: "RackBerries", ColorSkin: "#385978", ColorRarity: 2.76 },
        { ColorHex: "#56C195", ColorTeam: "GreenFairies", ColorSkin: "#1E8774", ColorRarity: 0.69 },
        { ColorHex: "#9B7BC1", ColorTeam: "PassionFronts", ColorSkin: "#632F87", ColorRarity: 0.69 },
        { ColorHex: "#C12EB7", ColorTeam: "BrasBerries", ColorSkin: "#871362", ColorRarity: 1.38 },
        { ColorHex: "#EACECE", ColorTeam: "CocoNaugthy", ColorSkin: "#D6AAAA", ColorRarity: 8.33 },
        { ColorHex: "#E27F84", ColorTeam: "CherryBosoms", ColorSkin: "#891946", ColorRarity: 6.94 },
        { ColorHex: "#FF9A9F", ColorTeam: "CherryBosoms", ColorSkin: "#891946", ColorRarity: 6.94 },
        { ColorHex: "#F9CDAF", ColorTeam: "CupCakes", ColorSkin: "#E29764", ColorRarity: 8.33 },
        { ColorHex: "#C1958E", ColorTeam: "ChocoLattes", ColorSkin: "#874D3C", ColorRarity: 7.63 },
        { ColorHex: "#E6BBB4", ColorTeam: "ChocoLattes", ColorSkin: "#874D3C", ColorRarity: 7.63 },
        { ColorHex: "#CDBEF7", ColorTeam: "PurpleHush", ColorSkin: "#5F4B8B", ColorRarity: 6.94 },
        { ColorHex: "#F9B4E4", ColorTeam: "WaterMelons", ColorSkin: "#EF6EAA", ColorRarity: 7.63 },
        { ColorHex: "#F4D4FC", ColorTeam: "StarBust", ColorSkin: "#F3A4FF", ColorRarity: 8.33 },
        { ColorHex: "#9BD3F9", ColorTeam: "BooBerries", ColorSkin: "#30B4E2", ColorRarity: 7.63 },
        { ColorHex: "#EBF2A7", ColorTeam: "PaPairmints", ColorSkin: "#BFD65B", ColorRarity: 7.63 },
      
  ];
  
 
  // Query all records in the table
  let records = await table.selectRecordsAsync();
  
  // Loop through each record
  // ...

// Loop through each record
    for (let record of records.records) {
    // Get the value from the 'ColorHex' column
    let colorHex = record.getCellValue("ColorHex");
  
    // Check if the colorHex value is not empty
    if (colorHex) {
      // Find the corresponding color mapping
      let mapping = colorMapping.find((map) => map.ColorHex === colorHex);
  
      if (mapping) {
        // Update the 'ColorTeam', 'ColorSkin', and 'ColorRarity' columns with the values from the mapping
        await table.updateRecordAsync(record, {
          ColorTeam: mapping.ColorTeam,
          ColorSkin: mapping.ColorSkin,
          ColorRarity: mapping.ColorRarity,
        });
  
        output.text(
          `Updated record '${record.name}': ColorTeam = '${mapping.ColorTeam}', ColorSkin = '${mapping.ColorSkin}', ColorRarity = '${mapping.ColorRarity}',`
        );
      } else {
        output.text(
          `No color mapping found for record '${record.name}' with ColorHex = '${colorHex}'`
        );
      }
    } else {
      output.text(`No ColorHex value for record '${record.name}'`);
    }
  }
  
  
  