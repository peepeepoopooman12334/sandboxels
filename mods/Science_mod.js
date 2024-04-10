// Science mod for Sandboxels
// (Inspired by survival.js)
// Build 11
// By: Lucifer (@a_british_proto (Discord))
// If there is anything you want to suggest or there's a bug then just dm me on discord
// Todo:
// - Try to get the mod to work by making different ways to craft all the (116) elements in the mod
// - Make new substances that you can get after mixing different elements
// - Make a way to get the different substances by mixing different elements and different substances
// - Create different proporties for the substances (doing now)

// How much of the elements you're gonna have when you start:

if (!settings.Science_mod) {
    settings.Science_mod = {
        "Hydrogen": 9.223372036854776e+18,
        "Helium": 9.223372036854776e+18,
        "Lithium": 9.223372036854776e+18,
        "Beryllium": 9.223372036854776e+18,
        "Boron": 9.223372036854776e+18,
        "Carbon": 9.223372036854776e+18,
        "Oxygen": 9.223372036854776e+18,
        "Flourine": 9.223372036854776e+18,
        "Neon": 9.223372036854776e+18,
        "Sodium": 9.223372036854776e+18,
        "Magnesium": 9.223372036854776e+18,
        "Aluminum": 9.223372036854776e+18,
        "Silicon": 9.223372036854776e+18,
        "Phosphorus": 9.223372036854776e+18,
        "Sulphur": 9.223372036854776e+18,
        "Chlorine": 9.223372036854776e+18,
        "Argon": 9.223372036854776e+18,
        "Potassium": 9.223372036854776e+18,
        "Calcium": 9.223372036854776e+18,
        "Scandium": 9.223372036854776e+18,
        "Titanium": 9.223372036854776e+18,
        "Vanadium": 9.223372036854776e+18,
        "Chromium": 9.223372036854776e+18,
        "Manganese": 9.223372036854776e+18,
        "Iron": 9.223372036854776e+18,
        "Cobalt": 9.223372036854776e+18,
        "Nickel": 9.223372036854776e+18,
        "Copper": 9.223372036854776e+18,
        "Zinc": 9.223372036854776e+18,
        "Gallium": 9.223372036854776e+18,
        "Germanium": 9.223372036854776e+18,
        "Arsenic": 9.223372036854776e+18,
        "Selenium": 9.223372036854776e+18,
        "Bromine": 9.223372036854776e+18,
        "Krypton": 9.223372036854776e+18,
        "Rubidium": 9.223372036854776e+18,
        "Strontium": 9.223372036854776e+18,
        "Yttrium": 9.223372036854776e+18,
        "Zirconium": 9.223372036854776e+18,
        "Niobium": 9.223372036854776e+18,
        "Molybdenum": 9.223372036854776e+18,
        "Technetium": 9.223372036854776e+18,
        "Ruthenium": 9.223372036854776e+18,
        "Rhodium": 9.223372036854776e+18,
        "Palladium": 9.223372036854776e+18,
        "Silver": 9.223372036854776e+18,
        "Cadmium": 9.223372036854776e+18,
        "Indium": 9.223372036854776e+18,
        "Tin": 9.223372036854776e+18,
        "Antimony": 9.223372036854776e+18,
        "Tellurium": 9.223372036854776e+18,
        "Iodine": 9.223372036854776e+18,
        "Xenon": 9.223372036854776e+18,
        "Cesium": 9.223372036854776e+18,
        "Barium": 9.223372036854776e+18,
        "Lanthanum": 9.223372036854776e+18,
        "Cerium": 9.223372036854776e+18,
        "Praseodymium": 9.223372036854776e+18,
        "Neodymium": 9.223372036854776e+18,
        "Promethium": 9.223372036854776e+18,
        "Samarium": 9.223372036854776e+18,
        "Europium": 9.223372036854776e+18,
        "Gadolinium": 9.223372036854776e+18,
        "Terbium": 9.223372036854776e+18,
        "Dysprosium": 9.223372036854776e+18,
        "Holmium": 9.223372036854776e+18,
        "Erbium": 9.223372036854776e+18,
        "Thulium": 9.223372036854776e+18,
        "Ytterbium": 9.223372036854776e+18,
        "Lutetium": 9.223372036854776e+18,
        "Hafnium": 9.223372036854776e+18,
        "Tantalum": 9.223372036854776e+18,
        "Tungsten": 9.223372036854776e+18,
        "Rhenium": 9.223372036854776e+18,
        "Osmium": 9.223372036854776e+18,
        "Iridium": 9.223372036854776e+18,
        "Platinum": 9.223372036854776e+18,
        "Gold": 9.223372036854776e+18,
        "Mercury": 9.223372036854776e+18,
        "Thallium": 9.223372036854776e+18,
        "Lead": 9.223372036854776e+18,
        "Bismuth": 9.223372036854776e+18,
        "Polonium": 9.223372036854776e+18,
        "Astatine": 9.223372036854776e+18,
        "Radon": 9.223372036854776e+18,
        "Francium": 9.223372036854776e+18,
        "Radium": 9.223372036854776e+18,
        "Actinium": 9.223372036854776e+18,
        "Thorium": 9.223372036854776e+18,
        "Protactinium": 9.223372036854776e+18,
        "Uranium": 9.223372036854776e+18,
        "Neptunium": 9.223372036854776e+18,
        "Plutonium": 9.223372036854776e+18,
        "Americium": 9.223372036854776e+18,
        "Curium": 9.223372036854776e+18,
        "Berkelium": 9.223372036854776e+18,
        "Californium": 9.223372036854776e+18,
        "Einsteinium": 9.223372036854776e+18,
        "Fermium": 9.223372036854776e+18,
        "Mendelevium": 9.223372036854776e+18,
        "Nobelium": 9.223372036854776e+18,
        "Lawrencium": 9.223372036854776e+18,
        "Rutherfordium": 9.223372036854776e+18,
        "Dubnium": 9.223372036854776e+18,
        "Seaborgium": 9.223372036854776e+18,
        "Bohrium": 9.223372036854776e+18,
        "Hassium": 9.223372036854776e+18,
        "Meitnerium": 9.223372036854776e+18,
        "Darmstadtium": 9.223372036854776e+18,
        "Roentgenium": 9.223372036854776e+18,
        "Copernicium": 9.223372036854776e+18,
        "Nihonium": 9.223372036854776e+18,
        "Flerovium": 9.223372036854776e+18,
        "Moscovium": 9.223372036854776e+18,
        "Livermorium": 9.223372036854776e+18,
        "Tennessine": 9.223372036854776e+18,
        "Oganesson": 9.223372036854776e+18,
    }
}

// Element proporties (all proporties have hidden:false as these are what you start with
// and you don't have to craft them):

// All of these are before the reaction when you add different stuff to these elements/substances
// happens (same with the substances)

element.Hydrogen = {
    behavior: behaviors.GAS,
    color:"D3D3D3",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Helium = {
    behavior: behaviors.GAS,
    color:"C0C0C0",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Lithium = {
    behavior: behaviors.WALL,
    color:"DADBDD",
    category:"land",
    state:"solid",
    hidden:false
}

element.Beryllium = {
    behavior: behaviors.WALL,
    color:"DADBDD",
    category:"land",
    state:"solid",
    hidden:false
}

element.Boron = {
    behavior: behaviors.WALL,
    color:"964B00",
    category:"land",
    state:"solid",
    hidden:false
}

element.Carbon = {
    behavior: behaviors.GAS,
    color:"000000",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Nitrogen = {
    behavior: behaviors.GAS,
    color:"0000FF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Oxygen = {
    behavior: behaviors.GAS,
    color:"000000",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Fluorine = {
    behavior: behaviors.WALL,
    color:"FFFF00",
    category:"land",
    state:"solid",
    hidden:false
}

element.Neon = {
    behavior: behaviors.GAS,
    color:"FFFFFF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Sodium = {
    behavior: behaviors.WALL,
    color:"A0522D",
    category:"land",
    state:"solid",
    hidden:false
}

element.Magnesium = {
    behavior: behaviors.WALL,
    color:"F0C8A0",
    category:"land",
    state:"solid",
    hidden:false
}

element.Aluminum = {
    behavior: behaviors.WALL,
    color:"C0C0C0",
    category:"land",
    state:"solid",
    hidden:false
}

element.Silicon = {
    behavior: behaviors.WALL,
    color:"C0C0C0",
    category:"land",
    state:"solid",
    hidden:false
}

element.Phosphorus = {
    behavior: behaviors.WALL,
    color:"FF0000",
    category:"land",
    state:"solid",
    hidden:false
}

element.Sulfur = {
    behavior: behaviors.WALL,
    color:"FFFF00",
    category:"land",
    state:"solid",
    hidden:false
}

element.Chlorine = {
    behavior: behaviors.GAS,
    color:"FFFFFF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Argon = {
    behavior: behaviors.GAS,
    color:"FFFFFF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Potassium = {
    behavior: behaviors.WALL,
    color:"00FF00",
    category:"land",
    state:"solid",
    hidden:false
}

element.Calcium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Scandium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Titanium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Vanadium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Chromium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Manganese = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Iron = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Cobalt = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Nickel = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Copper = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Zinc = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Gallium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Germanium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Arsenic = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Selenium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Bromine = {
    behavior: behaviors.LIQUID,
    color:"FFFFFF",
    category:"liquids",
    state:"liquid",
    hidden:false
}

element.Krypton = {
    behavior: behaviors.GAS,
    color:"FFFFFF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Rubidium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Strontium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Yttrium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Zirconium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Niobium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Molybdenum = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Technetium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Ruthenium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Rhodium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Palladium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Silver = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Cadmium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Indium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Tin = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Antimony = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Tellurium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Iodine = {
    behavior: behaviors.GAS,
    color:"FFFFFF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Xenon = {
    behavior: behaviors.GAS,
    color:"FFFFFF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Caesium = {
    behavior: behaviors.GAS,
    color:"FFFFFF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Barium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Lanthanum = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Cerium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Praseodymium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Neodymium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Promethium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Samarium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Europium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Gadolinium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Terbium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Dysprosium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Holmium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Erbium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Thulium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Ytterbium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Lutetium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Hafnium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Tantalum = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Tungsten = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Rhenium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Osmium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Iridium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Platinum = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Gold = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Mercury = {
    behavior: behaviors.LIQUID,
    color:"00FFFF",
    category:"liquids",
    state:"liquid",
    hidden:false
}

element.Thallium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Lead = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Bismuth = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Polonium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Astatine = {
    behavior: behaviors.GAS,
    color:"FFFFFF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Radon = {
    behavior: behaviors.GAS,
    color:"FFFFFF",
    category:"gases",
    state:"gas",
    hidden:false
}

element.Francium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Radium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Actinium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Thorium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Protactinium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Uranium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Neptunium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Plutonium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Americium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Curium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Berkelium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Californium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Einsteinium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Fermium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Mendelevium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Nobelium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Lawrencium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Rutherfordium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Dubnium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Seaborgium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Bohrium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Hassium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Meitnerium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Darmstadtium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Roentgenium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Copernicium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Nihonium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Flerovium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Moscovium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Livermorium = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Tennessine = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

element.Oganesson = {
    behavior: behaviors.WALL,
    color:"00FFFF",
    category:"land",
    state:"solid",
    hidden:false
}

// Substance proporties (These are the properties of the substances, not the elements These properties 
// use hidden:true as you don't start with these but instead have to craft them):

substance.Polystyrene = {
    behavior: behaviors.WALL,
    color:"FFFFFF",
    category:"land",
    state:"solid",
    hidden:true
}

substance.Styrene = {
    behavior: behaviors.LIQUID,
    color:"FFFFED",
    category:"liquids",
    state:"liquid",
    hidden:true
}

substance.Cinnamaldehyde = {
    behavior: behaviors.LIQUID,
    color:"FDFD96",
    category:"liquids",
    state:"liquid",
    hidden:true
}

substance.Acetone = {
    behavior: behaviors.LIQUID,
    color:"DADEDF",
    category:"liquids",
    state:"liquid",
    hidden:true
}

substance.Methane = {
    behavior: behaviors.GAS,
    color:"C1C7C9",
    category:"gases",
    state:"gas",
    hidden:true
}

substance.Ethane = {
    behavior: behaviors.GAS,
    color:"C1C7C9",
    category:"gases",
    state:"gas",
    hidden:true
}

// Doing more tmrw
