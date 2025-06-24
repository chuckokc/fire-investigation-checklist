// enhancedChecklistData.js
// Enhanced checklists based on NFPA 921 methodology and professional fire investigation standards

export const enhancedStructureFireChecklist = {
    "Administrative Details": [
        "Incident Address (Full street address, City, State, ZIP)",
        "Fire Incident # (OKCFD-[#])",
        "Case # assigned",
        "Incident Date (MM/DD/YYYY)",
        "Incident Time (HH:MM AM/PM)",
        "Incident Type classification",
        "Previous incidents at location (Yes/No)",
        "Lead Investigator (Name, ID#, Certifications)",
        "Participating Investigators (Names, ID#s, Agencies, Roles)",
        "Legal Authority documented (Municipal Code references)"
    ],
    
    "Initial Scene Observations": [
        "Arrival conditions (visible smoke, flames, crowd presence)",
        "Environmental factors (weather, wind direction, lighting)",
        "Structure condition (damage extent, access points)",
        "Fire pattern indicators (V-patterns, heat shadows, demarcation lines)",
        "Notable external indicators (odors, sounds, debris patterns)",
        "Safety concerns (structural instability, hazardous materials)",
        "Other agencies present (law enforcement, utilities)",
        "Scene security established",
        "Control zones implemented",
        "Access log initiated"
    ],
    
    "Methodology Documentation": [
        "Recognize need documented",
        "Problem defined clearly",
        "Data collection plan established",
        "Analysis methodology selected",
        "Working hypothesis developed",
        "Hypothesis testing approach",
        "Final hypothesis selection criteria",
        "NFPA 921 chapters referenced"
    ],
    
    "Photography Requirements": {
        "Equipment": [
            "Primary camera (model, serial#)",
            "Secondary camera available",
            "Thermal imaging camera used",
            "UV photography if applicable",
            "Photo log initiated"
        ],
        "Exterior Documentation": [
            "Alpha side (front) - overall and detail shots",
            "Bravo side (left) - overall and detail shots",
            "Charlie side (rear) - overall and detail shots", 
            "Delta side (right) - overall and detail shots",
            "Aerial/elevated views if available",
            "All entry/exit points",
            "Utility connections and meters",
            "Ventilation points (windows, doors, roof)",
            "Exposure damage to adjacent structures"
        ],
        "Interior Documentation": [
            "Progress from least to most damaged areas",
            "Each room - four corners documented",
            "Ceiling conditions each room",
            "Floor conditions each room",
            "Contents position and damage",
            "Area of origin - multiple angles",
            "Scale references included",
            "Pattern detail photos",
            "Evidence in context before collection"
        ]
    },
    
    "Building Data Collection": [
        "Construction type (Type I-V)",
        "Building dimensions documented",
        "Age of structure",
        "Recent renovations noted",
        "Interior finishes identified",
        "Concealed spaces checked",
        "Fire protection systems status",
        "Maintenance records reviewed",
        "Occupancy type and use",
        "Building layout sketched"
    ],
    
    "Fire Operations Impact": [
        "Suppression tactics employed",
        "Ventilation timing and locations",
        "Positive pressure ventilation used",
        "Overhaul extent documented",
        "Fire stream impacts on patterns",
        "Timeline of fire operations",
        "Command decisions affecting scene"
    ],
    
    "Utilities Documentation": [
        "Electrical panel location and condition",
        "Circuit breakers position (on/off/tripped)",
        "AFCI/GFCI breakers present and status",
        "Gas meter location and reading",
        "Gas appliances inventoried",
        "HVAC system status at time of fire",
        "Recent utility work documented",
        "Smart meter data requested"
    ],
    
    "Interior Examination by Compartment": [
        "Room identification and normal use",
        "Ceiling damage patterns",
        "Wall damage patterns", 
        "Floor damage patterns",
        "Contents inventory and position",
        "Electrical receptacles examined",
        "Appliances documented",
        "Arc mapping completed",
        "Ventilation effects on patterns",
        "Protected areas identified",
        "Heat shadowing documented",
        "Debris patterns analyzed"
    ],
    
    "Fire Pattern Analysis": [
        "Demarcation lines traced",
        "Heat and flame vectors determined",
        "Plume geometry analyzed",
        "Hot gas layer effects",
        "Ventilation-generated patterns",
        "Flashover indicators assessed",
        "Full room involvement indicators",
        "Fuel-controlled vs ventilation-controlled",
        "Compartment fire effects"
    ],
    
    "Origin Determination": [
        "Witness observations triangulated",
        "Alarm activation sequence",
        "Fire patterns analyzed",
        "Lowest burn elevation identified",
        "Greatest damage area assessed",
        "Multiple data sets compared",
        "Origin hypothesis tested",
        "Alternative origins eliminated",
        "Confidence level stated"
    ],
    
    "Evidence Collection & Chain of Custody": [
        "Photos before collection",
        "Item description detailed",
        "Exact location documented",
        "Collection method appropriate",
        "Evidence marking completed",
        "Packaging and sealing proper",
        "Chain of custody initiated",
        "Evidence log updated",
        "Lab submission forms completed",
        "Digital evidence preserved"
    ]
};

export const enhancedInterviewChecklist = {
    "Interview Preparation": [
        "Case file reviewed",
        "Questions prepared based on role",
        "Recording equipment tested",
        "Interview location secured",
        "Consent forms prepared"
    ],
    
    "Administrative Documentation": [
        "Fire Incident # referenced",
        "Case # documented", 
        "Interview date and time",
        "Interview location",
        "Recording method stated",
        "All personnel present listed",
        "Roles of personnel defined"
    ],
    
    "Subject Information": [
        "Full legal name obtained",
        "Date of birth verified",
        "Current address confirmed",
        "Phone numbers (home/cell/work)",
        "Email address",
        "Relationship to incident",
        "Role (Owner/Occupant/Witness/Responder)",
        "Government-issued ID verified",
        "ID number documented"
    ],
    
    "Interview Context & Observations": [
        "Interview setting described",
        "Environmental conditions noted",
        "Subject's demeanor documented",
        "Body language observed",
        "Emotional state assessed",
        "Impairments or limitations noted",
        "Language barriers identified",
        "Need for interpreter assessed",
        "Subject's cooperation level"
    ],
    
    "For Incident Commanders": [
        "Dispatch information received",
        "Initial size-up observations",
        "Command decisions made",
        "Strategy implemented",
        "Tactical objectives",
        "Resource deployment details",
        "Fire behavior during operations",
        "Changes in fire behavior",
        "Safety concerns identified",
        "Evacuation decisions",
        "Defensive/offensive transitions",
        "Unusual observations"
    ],
    
    "For Utility Personnel": [
        "System status upon arrival",
        "Meter readings recorded",
        "Service shut-off times",
        "Recent service history",
        "Known system issues",
        "Abnormalities noted",
        "Equipment condition assessed",
        "Actions taken at scene",
        "Safety protocols followed",
        "Hazard mitigation steps"
    ],
    
    "For Occupants/Owners": [
        "Activities 24 hours before fire",
        "Last person to leave premises",
        "Security measures (locked doors/windows)",
        "Time fire discovered",
        "Location when discovered",
        "Initial observations (smoke/flames/sounds)",
        "Discovery details",
        "Evacuation actions taken",
        "Routes used to escape",
        "Doors/windows opened during escape",
        "Attempts to fight fire",
        "Items retrieved during evacuation",
        "Smoke alarm status and function",
        "Last battery change date",
        "Electrical issues noticed recently",
        "Appliances in use before fire",
        "Heating equipment status",
        "Cooking activities",
        "Smoking materials present",
        "Candles or open flames",
        "Space heaters in use",
        "Extension cord usage",
        "Recent electrical work",
        "Insurance company name",
        "Policy number",
        "Agent contact information",
        "Building layout description",
        "Room usage details",
        "Recent repairs or modifications",
        "Storage of flammables",
        "Combustible materials locations",
        "Unusual odors before fire",
        "Previous fire incidents",
        "Threats or disputes"
    ],
    
    "For Neighbors/Bystanders": [
        "Time first noticed incident",
        "Initial observations",
        "Smoke color and density",
        "Flame visibility and location",
        "Sounds heard (explosions/breaking glass)",
        "Actions taken (called 911/alerted occupants)",
        "Unusual activities before fire",
        "Unfamiliar persons observed",
        "Vehicles noticed",
        "Previous concerns about property",
        "History with occupants",
        "Photos or videos taken"
    ],
    
    "Physical Evidence Mentioned": [
        "Items identified by witness",
        "Last known location of items",
        "Condition when last seen",
        "Value of items",
        "Significance explained"
    ],
    
    "Timeline Development": [
        "Specific times provided",
        "Time references used",
        "Sequence of events",
        "Duration estimates",
        "Cross-reference points"
    ],
    
    "Statement Documentation": [
        "Direct quotes captured",
        "Key statements highlighted",
        "Contradictions noted",
        "Clarifications obtained",
        "Follow-up questions asked",
        "Areas of uncertainty",
        "Agreement for future contact"
    ]
};

export const enhancedVehicleFireChecklist = {
    "Administrative Information": [
        "Incident location (exact address/GPS)",
        "Fire Incident # (OKCFD-[#])",
        "Case # assigned",
        "Date and time of fire",
        "Dispatch and arrival times",
        "Vehicle on public/private property",
        "Classification (Undetermined/Accidental/Natural/Incendiary)",
        "Lead investigator and credentials",
        "Supporting personnel documented"
    ],
    
    "Vehicle Identification": [
        "Year, Make, Model confirmed",
        "VIN verified and photographed",
        "License plate number and state",
        "Registration status current",
        "Owner name and address",
        "Insurance company and policy #",
        "Current mileage reading",
        "Service history obtained",
        "Recent repairs documented",
        "Modifications noted",
        "Active recalls checked",
        "Previous damage documented"
    ],
    
    "Environmental Conditions": [
        "Temperature at time of fire",
        "Humidity level",
        "Wind speed and direction",
        "Precipitation type/amount",
        "Sky conditions",
        "Lighting conditions",
        "Surface conditions (wet/dry/icy)",
        "Slope or grade of surface"
    ],
    
    "Scene Documentation": [
        "Vehicle position and orientation",
        "Distance from structures/vehicles",
        "Ground surface type",
        "Debris field mapped",
        "Tire marks documented",
        "Fluid trails marked",
        "Witness locations noted",
        "Photo directions established"
    ],
    
    "Engine Compartment Examination": [
        "Hood condition and latching mechanism",
        "Hood release cable condition",
        "Battery location and condition",
        "Battery cable connections",
        "Fluid levels checked (oil/coolant/brake/PS)",
        "Fluid leaks identified and sampled",
        "Belt conditions assessed",
        "Hose conditions documented",
        "Electrical components examined",
        "Fuse box condition",
        "Arc damage locations mapped",
        "Aftermarket equipment noted",
        "Engine modifications documented",
        "Heat shields in place",
        "Exhaust manifold condition"
    ],
    
    "Body and Glass Examination": [
        "Paint discoloration patterns",
        "Metal distortion mapping",
        "Oxidation patterns",
        "Glass fracture patterns (thermal vs mechanical)",
        "Window positions (up/down)",
        "Door positions (open/closed/locked)",
        "Sunroof/moonroof position",
        "Body panel gaps",
        "Antenna condition"
    ],
    
    "Undercarriage Inspection": [
        "Exhaust system integrity",
        "Catalytic converter condition",
        "Fuel lines traced and examined",
        "Brake lines condition",
        "Suspension components",
        "Drive shaft condition",
        "Transmission condition",
        "Oil pan integrity",
        "Road debris impact evidence"
    ],
    
    "Electrical System Analysis": [
        "Ignition switch position",
        "Key presence and location",
        "Fuse conditions documented",
        "Relay conditions checked",
        "Wire damage patterns analyzed",
        "Circuit protection devices",
        "Aftermarket electrical items",
        "Audio system components",
        "Alarm system presence",
        "GPS/tracking devices"
    ],
    
    "Passenger Compartment": [
        "Ignition key position",
        "Gear selector position",
        "Dashboard warning lights",
        "Seat positions and adjustments",
        "Seat belt usage evidence",
        "Airbag deployment status",
        "Interior burn patterns",
        "Headliner damage",
        "Floor covering damage",
        "Personal items inventory",
        "Cigarette lighter condition",
        "Power outlet usage",
        "Center console contents"
    ],
    
    "Cargo/Trunk Area": [
        "Fire patterns and direction",
        "Heat damage to surfaces",
        "Cargo contents documented",
        "Fuel load calculated",
        "Electrical components present",
        "Floor/carpet condition",
        "Spare tire area examined",
        "Tool kit inventory",
        "Jack and tools present",
        "Trunk release mechanism",
        "Emergency release function"
    ],
    
    "Fuel System Examination": [
        "Fuel tank integrity assessed",
        "Fuel level at time of fire",
        "Fuel cap presence and seal",
        "Fuel line routing traced",
        "Connection points examined",
        "Fuel pump electrical connections",
        "Fuel rail and injectors",
        "Evaporative emission system",
        "Fuel system modifications"
    ],
    
    "Evidence Collection Procedures": [
        "Photo documentation before collection",
        "Evidence location mapped",
        "Collection tools appropriate",
        "Samples properly labeled",
        "Containers appropriate for evidence type",
        "Chain of custody maintained",
        "Comparison samples collected",
        "Lab analysis requested",
        "Digital evidence preserved"
    ],
    
    "Timeline and Witness Information": [
        "Last operation of vehicle",
        "Discovery time and circumstances",
        "Notification timeline",
        "Response timeline",
        "Suppression activities",
        "Witness observations compiled",
        "Video surveillance checked",
        "Cell phone records considered"
    ]
};

// Helper function to calculate progress
export const calculateChecklistProgress = (checkedItems, checklistData) => {
    let totalItems = 0;
    let checkedCount = 0;
    
    Object.values(checklistData).forEach(section => {
        if (Array.isArray(section)) {
            totalItems += section.length;
            section.forEach(item => {
                if (checkedItems[item]) checkedCount++;
            });
        } else if (typeof section === 'object') {
            // Handle nested sections
            Object.values(section).forEach(subSection => {
                if (Array.isArray(subSection)) {
                    totalItems += subSection.length;
                    subSection.forEach(item => {
                        if (checkedItems[item]) checkedCount++;
                    });
                }
            });
        }
    });
    
    return {
        total: totalItems,
        checked: checkedCount,
        percentage: totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0
    };
};