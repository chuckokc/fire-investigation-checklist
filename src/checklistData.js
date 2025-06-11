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

// NEW: PC Affidavit Checklist
export const pcAffidavitChecklist = {
    "Header Information": [
        "Defendant's full legal name (Last, First)",
        "Race/Sex",
        "Date of Birth",
        "Physical description (Height/Weight, Hair/Eyes)",
        "SSN/Driver's License number",
        "Current address",
        "Specific charge and statute number"
    ],
    "Opening & Credentials": [
        "Opening Statement: 'I, [Your Name] #[Commission Number]...'",
        "Credentials: Current position and agency",
        "Credentials: Years of service (total and in fire investigation)",
        "Credentials: Number of fires investigated",
        "Credentials: Relevant certifications (CLEET, IAAI, etc.)",
        "Credentials: Specialized training",
        "Credentials: Education"
    ],
    "Case Facts: Initial Response & Scene": [
        "Date and time of fire",
        "Exact location (full address)",
        "Responding units",
        "Initial observations from first responders",
        "Fire patterns observed",
        "Origin determination (specific location and methodology)",
        "Cause determination (elimination of accidental causes)",
        "Evidence of accelerants or ignition devices",
        "Photos/video documentation"
    ],
    "Case Facts: Witnesses & Evidence": [
        "Statements from firefighters, neighbors, occupants",
        "Suspicious behavior observed",
        "Timeline of events from witnesses",
        "911 call information",
        "Physical evidence collected",
        "Chain of custody maintained",
        "Lab results (if available)",
        "Surveillance footage obtained",
        "Electronic data (cell phone records, social media, etc.)"
    ],
    "Suspect Information & Linking to Statute": [
        "How the suspect was identified",
        "Motive (financial, revenge, concealment, etc.)",
        "Opportunity (access, timeline)",
        "Prior incidents or threats by suspect",
        "Statements made by suspect",
        "Explicitly state how facts meet statute: Willful & Malicious Act",
        "Explicitly state how facts meet statute: Occupancy Status (Inhabited/Uninhabited)",
        "Explicitly state how facts meet statute: Property Type/Value",
        "Explicitly state how facts meet statute: Defendant's Involvement"
    ],
    "Closing & Pre-Submission": [
        "Closing Statement: 'Based upon the information provided...'",
        "Document proofread for errors",
        "Supervisor review completed"
    ]
};

// NEW: Arson Elements & Definitions Checklist
export const arsonElementsChecklist = {
    "Key Definitions (OUJI-CR 5-10)": [
        "Malicious: A wish to vex, annoy or injure.",
        "Willful: Purposeful. It does not require any intent to violate law, or to injure another, or to acquire any advantage.",
        "Inhabited: Any part of the building/structure is normally used by any person for lodging.",
        "Occupied: The building/structure actually contains one or more persons at the time of the crime.",
        "Uninhabited: No part of the building/structure is normally used by any person for lodging.",
        "Unoccupied: The building/structure contains no persons at the time of the alleged crime."
    ],
    "Arson in the First Degree (OUJI-CR 5-2)": [
        "First, a willful and malicious;",
        "Second, (setting fire to)/burning/(destroying... by use of any explosive/accelerant...);",
        "Third, (a building/structure)/(the contents of a building/structure);",
        "Fourth, which was inhabited/occupied by one or more persons;",
        "Fifth, caused/aided/counseled/procured by the defendant."
    ],
    "Arson in the Second Degree (OUJI-CR 5-4)": [
        "First, a willful and malicious;",
        "Second, (setting fire to)/burning/(destroying... by use of any explosive...);",
        "Third, (a building/structure)/(the contents of a building/structure);",
        "Fourth, which was uninhabited/unoccupied;",
        "Fifth, caused/aided/counseled/procured by the defendant."
    ],
    "Arson in the Third Degree (Property - §1403A, OUJI-CR 5-6)": [
        "First, a willful and malicious;",
        "Second, (setting fire to)/burning/(destroying... by use of any explosive...);",
        "Third, any real or personal property valued at $50 or more;",
        "Fourth, caused/aided/counseled/procured by the defendant."
    ],
    "Arson in the Third Degree (Insurance - §1403B, OUJI-CR 5-7)": [
        "First, a willful and malicious;",
        "Second, (setting fire to)/burning/(destroying... by use of any explosive...);",
        "Third, any building(s)/property/chattels;",
        "Fourth, which was/were insured at the time;",
        "Fifth, with intent to defraud/injure an insurer;",
        "Sixth, caused/aided/counseled/procured by the defendant."
    ],
    "Arson in the Fourth Degree (Attempt - §1404, OUJI-CR 5-8 & 5-9)": [
        "First, a willful and malicious;",
        "Second, EITHER: an attempt to set fire to/burn... a protected property;",
        "Third, OR: placing/distributing flammable/explosive material in/on a property;",
        "Fourth, with intent eventually to set fire to/burn the property;",
        "Fifth, such act was performed/procured by the defendant."
    ]
};