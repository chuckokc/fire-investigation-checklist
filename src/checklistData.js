// checklistData.js
// This file contains all our checklist items organized by type and section
export const structureFireChecklist = {
    "Initial Documentation": [
        "Incident/Case numbers",
        "Date and time",
        "Location/GPS coordinates",
        "Lead investigator",
        "Supporting investigators",
        "First unit observations",
        "Command officer",
        "Suppression tactics"
    ],
    "Scene Safety Assessment": [
    "Structural stability",
    "Utility status (gas/electric)",
    "Hazardous materials",
    "Required PPE",
    "Security perimeter",
    { 
        label: "Weather Conditions",
        type: "weather-component"
    }
],
    "Exterior - Each Side": [
        "Fire damage extent",
        "Burn patterns",
        "Ventilation points",
        "Utility entries",
        "Access points",
        "Window conditions",
        "Door positions",
        "Material consumption",
        "Wall/roof conditions",
        "Construction type"
    ],
    "Interior - Every Room": [
        "Room identification",
        "Fire patterns",
        "Heat indicators",
        "Ventilation effects",
        "Fuel load",
        "Ceiling/wall/floor damage",
        "Content damage",
        "Evidence location",
        "Normal use/contents",
        "Recent changes"
    ],
    "Evidence Collection": [
        "Photos before collection",
        "Item description/location",
        "Collection method",
        "Evidence marking",
        "Packaging/sealing",
        "Chain of custody",
        "Photo/video logs",
        "Scene diagrams",
        "Field notes",
        "Lab submission forms"
    ]
};
export const interviewChecklist = {
    "Administrative Details": [
        "Case number",
        "Interview date/time",
        "Location",
        "Recording method",
        "Personnel present"
    ],
    "Subject Information": [
        "Full name",
        "Date of birth",
        "Contact information",
        "Role/relationship",
        "ID verification"
    ],
    "Initial Observations": [
        "Subject's demeanor",
        "Physical appearance",
        "Notable behaviors",
        "Communication style",
        "Level of cooperation"
    ],
    // Adding the Timeline Documentation section
    "Timeline Documentation": [
        "First awareness of incident",
        "Initial location when fire discovered",
        "Observations of fire conditions",
        "Actions taken upon discovery",
        "Order of events observed",
        "Time references/markers",
        "Movement throughout incident",
        "Interactions with others",
        "Observations of others' actions",
        "Post-fire observations",
        "Duration of key events",
        "Weather conditions noted"
    ],
    // Adding the Fire-Specific Details section
    "Fire-Specific Details": [
        "Room contents before fire",
        "Normal use of space",
        "Recent changes to contents",
        "Electrical devices present",
        "Heating equipment operation",
        "Smoking materials presence",
        "Flammable liquids/gases stored",
        "Recent maintenance/repairs",
        "Access to ignition sources",
        "Fuel load modifications",
        "Storage practices",
        "Equipment operation status",
        "Unusual items present",
        "Recent activities in area",
        "Historical fire safety issues"
    ]
};
export const vehicleFireChecklist = {
    "Vehicle Information": [
        "Year/Make/Model",
        "VIN verification",
        "License plate",
        "Registration status",
        "Owner information",
        "Insurance details",
        "Service history",
        "Prior damage",
        "Recent repairs",
        "Recall status"
    ],
    "Engine Compartment": [
        "Fire patterns",
        "Heat indicators",
        "Component damage",
        "Fluid residues",
        "Electrical systems",
        "Fuel system",
        "Recent repairs",
        "Modifications"
    ],
    "Passenger Compartment": [
    "Dashboard condition",
    "Instrument panel",
    {
        label: "Windshield glass",
        subsections: [
            "Above fire debris",
            "Below fire debris"
        ]
    },
    "Seat conditions",
    "Floor covering",
    "Interior materials",
    "Personal items",
    "Burn patterns",
    "Heat effects"
],
    "External Areas": [
        "Paint condition",
        "Glass damage",
        "Door positions",
        "Trunk condition",
        "Undercarriage",
        "Wheel wells",
        "Fluid evidence",
        "Component failure"
    ],
    "Cargo/Trunk Area": [
    "Fire patterns and direction",
    "Heat damage to surrounding surfaces",
    "Cargo contents and position",
    "Fuel load present",
    "Electrical components",
    "Floor condition",
    "Spare tire/tool kit area",
    "Fluid evidence",
    "Lid/door operation",
    "Prior modifications"
],
    "Evidence Collection": [
        "Photos taken",
        "Samples collected",
        "Components retained",
        "Measurements recorded",
        "Diagrams created",
        "Documentation completed",
        "Chain of custody",
        "Evidence security"
    ]
};