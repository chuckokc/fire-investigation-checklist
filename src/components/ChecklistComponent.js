// ChecklistComponent.js
// This component manages our checklist interface and all its functionality
import React, { useState, useEffect } from 'react';
import { structureFireChecklist, interviewChecklist, vehicleFireChecklist } from '../checklistData';
import ExportButton from './ExportButton';
import WeatherComponent from './WeatherComponent';

function ChecklistComponent() {
    // Keep track of which tab is selected
    const [activeTab, setActiveTab] = useState('structure');
    // Store the state of checked items
    const [checkedItems, setCheckedItems] = useState({});

    // When a tab is clicked, load its saved progress
    useEffect(() => {
        const savedProgress = localStorage.getItem(`checklist-${activeTab}`);
        if (savedProgress) {
            setCheckedItems(JSON.parse(savedProgress));
        } else {
            setCheckedItems({});
        }
    }, [activeTab]);

    // Handle checking and unchecking items
    const handleCheckItem = (item) => {
        const newCheckedItems = {
            ...checkedItems,
            [item]: !checkedItems[item]
        };
        setCheckedItems(newCheckedItems);
        localStorage.setItem(`checklist-${activeTab}`, JSON.stringify(newCheckedItems));
    };

    const handleClearChecklist = () => {
        // This clears all checked items
        setCheckedItems({});
        // This removes the saved data from local storage
        localStorage.removeItem(`checklist-${activeTab}`);
    };

    // Get the correct checklist based on which tab is active
    const getActiveChecklist = () => {
        switch(activeTab) {
            case 'structure':
                return structureFireChecklist;
            case 'interview':
                return interviewChecklist;
            case 'vehicle':
                return vehicleFireChecklist;
            default:
                return {};
        }
    };

    const renderChecklistItems = (items) => {
        return items.map((item, index) => {
            // Handle items with subsections
            if (typeof item === 'object') {
                if (item.subsections) {
                    return (
                        <div key={index} className="checklist-subsection">
                            <div className="subsection-label">{item.label}</div>
                            <div className="subsection-items">
                                {item.subsections.map((subItem, subIndex) => (
                                    <div key={`${index}-${subIndex}`} 
                                         className="checklist-item ml-6">
                                        <input
                                            type="checkbox"
                                            id={`${item.label}-${subIndex}`}
                                            checked={checkedItems[`${item.label}-${subItem}`] || false}
                                            onChange={() => handleCheckItem(`${item.label}-${subItem}`)}
                                        />
                                        <label htmlFor={`${item.label}-${subIndex}`}>
                                            {subItem}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                }
                // Here's where we handle the weather component
                if (item.type === 'weather-component') {
                    return (
                        <div key={index} className="checklist-item">
                            <div className="weather-label">{item.label}</div>
                            <WeatherComponent />
                        </div>
                    );
                }
            }
            // Handle regular items
            return (
                <div key={index} className="checklist-item">
                    <input
                        type="checkbox"
                        checked={checkedItems[item] || false}
                        onChange={() => handleCheckItem(item)}
                    />
                    <label>{item}</label>
                </div>
            );
        });
    };

    // Get the current checklist based on active tab
    const activeChecklist = getActiveChecklist();

    return (
        <div className="checklist-container">
            <div className="tab-buttons">
                <button 
                    className={activeTab === 'structure' ? 'active' : ''}
                    onClick={() => setActiveTab('structure')}
                >
                    Structure Fire
                </button>
                <button 
                    className={activeTab === 'interview' ? 'active' : ''}
                    onClick={() => setActiveTab('interview')}
                >
                    Interview
                </button>
                <button 
                    className={activeTab === 'vehicle' ? 'active' : ''}
                    onClick={() => setActiveTab('vehicle')}
                >
                    Vehicle Fire
                </button>
            </div>
            <div className="checklist-content">
                {Object.entries(activeChecklist).map(([section, items]) => (
                    <div key={section} className="checklist-section">
                        <h3>{section}</h3>
                        {renderChecklistItems(items)}
                    </div>
                ))}
            </div>
            <button
    onClick={handleClearChecklist}
    className="fixed bottom-4 left-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-all"
    title="Clear Checklist"
>
    Clear
</button>
            
            {/* This is the export button component that needs to be added */}
            <ExportButton 
                checkedItems={checkedItems}
                activeTab={activeTab}
                checklistData={getActiveChecklist()}
            />
        </div>
    );
}

export default ChecklistComponent;