// EnhancedChecklistComponent.js
import React, { useState, useEffect } from 'react';
import {
    enhancedStructureFireChecklist,
    enhancedInterviewChecklist,
    enhancedVehicleFireChecklist,
    calculateChecklistProgress
} from '../enhancedChecklistData';
import { 
    pcAffidavitChecklist,
    arsonElementsChecklist
} from '../checklistData';
import EnhancedExportButton from './EnhancedExportButton';
import WeatherComponent from './WeatherComponent';
import { CheckCircle2, Circle, ChevronDown, ChevronRight } from 'lucide-react';

function EnhancedChecklistComponent() {
    const [activeTab, setActiveTab] = useState('structure');
    const [checkedItems, setCheckedItems] = useState({});
    const [collapsedSections, setCollapsedSections] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [showProgress, setShowProgress] = useState(true);

    // Load saved progress when tab changes
    useEffect(() => {
        const savedProgress = localStorage.getItem(`enhanced-checklist-${activeTab}`);
        const savedCollapsed = localStorage.getItem(`collapsed-sections-${activeTab}`);
        
        if (savedProgress) {
            setCheckedItems(JSON.parse(savedProgress));
        } else {
            setCheckedItems({});
        }
        
        if (savedCollapsed) {
            setCollapsedSections(JSON.parse(savedCollapsed));
        } else {
            setCollapsedSections({});
        }
    }, [activeTab]);

    // Save progress automatically
    const handleCheckItem = (item) => {
        const newCheckedItems = {
            ...checkedItems,
            [item]: !checkedItems[item]
        };
        setCheckedItems(newCheckedItems);
        localStorage.setItem(`enhanced-checklist-${activeTab}`, JSON.stringify(newCheckedItems));
    };

    // Toggle section collapse state
    const toggleSection = (section) => {
        const newCollapsed = {
            ...collapsedSections,
            [section]: !collapsedSections[section]
        };
        setCollapsedSections(newCollapsed);
        localStorage.setItem(`collapsed-sections-${activeTab}`, JSON.stringify(newCollapsed));
    };

    // Clear current checklist
    const handleClearChecklist = () => {
        if (window.confirm('Are you sure you want to clear all checked items?')) {
            setCheckedItems({});
            localStorage.removeItem(`enhanced-checklist-${activeTab}`);
        }
    };

    // Get active checklist based on selected tab
    const getActiveChecklist = () => {
        switch(activeTab) {
            case 'structure':
                return enhancedStructureFireChecklist;
            case 'interview':
                return enhancedInterviewChecklist;
            case 'vehicle':
                return enhancedVehicleFireChecklist;
            case 'pcAffidavit':
                return pcAffidavitChecklist;
            case 'arsonElements':
                return arsonElementsChecklist;
            default:
                return {};
        }
    };

    // Filter items based on search term
    const filterItems = (items) => {
        if (!searchTerm) return items;
        
        return items.filter(item => {
            if (typeof item === 'string') {
                return item.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return true;
        });
    };

    // Render individual checklist items with enhanced styling
    const renderChecklistItems = (items, sectionKey = '') => {
        const filteredItems = filterItems(items);
        
        return filteredItems.map((item, index) => {
            // Handle nested sections
            if (typeof item === 'object' && item.subsections) {
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
            
            // Handle weather component
            if (item.type === 'weather-component') {
                return (
                    <div key={index} className="checklist-item">
                        <div className="weather-label">{item.label}</div>
                        <WeatherComponent />
                    </div>
                );
            }
            
            // Handle regular items
            const isChecked = checkedItems[item] || false;
            
            return (
                <div key={index} className={`checklist-item ${isChecked ? 'checked' : ''}`}>
                    <button
                        className="checkbox-button"
                        onClick={() => handleCheckItem(item)}
                        aria-label={isChecked ? 'Uncheck item' : 'Check item'}
                    >
                        {isChecked ? 
                            <CheckCircle2 className="w-5 h-5 text-green-600" /> : 
                            <Circle className="w-5 h-5 text-gray-400" />
                        }
                    </button>
                    <label 
                        onClick={() => handleCheckItem(item)}
                        className={isChecked ? 'line-through text-gray-500' : ''}
                    >
                        {item}
                    </label>
                </div>
            );
        });
    };

    // Render sections with collapse functionality
    const renderSection = (section, items) => {
        const isCollapsed = collapsedSections[section];
        const hasNestedSections = !Array.isArray(items);
        
        return (
            <div key={section} className="checklist-section enhanced">
                <div 
                    className="section-header"
                    onClick={() => toggleSection(section)}
                >
                    {isCollapsed ? 
                        <ChevronRight className="w-5 h-5" /> : 
                        <ChevronDown className="w-5 h-5" />
                    }
                    <h3>{section}</h3>
                    {!hasNestedSections && (
                        <span className="section-count">
                            {items.filter(item => checkedItems[item]).length}/{items.length}
                        </span>
                    )}
                </div>
                
                {!isCollapsed && (
                    <div className="section-content">
                        {hasNestedSections ? (
                            // Handle nested sections
                            Object.entries(items).map(([subSection, subItems]) => (
                                <div key={subSection} className="nested-section">
                                    <h4>{subSection}</h4>
                                    {renderChecklistItems(subItems, `${section}-${subSection}`)}
                                </div>
                            ))
                        ) : (
                            // Handle regular items
                            renderChecklistItems(items, section)
                        )}
                    </div>
                )}
            </div>
        );
    };

    const activeChecklist = getActiveChecklist();
    const progress = calculateChecklistProgress(checkedItems, activeChecklist);

    return (
        <div className="enhanced-checklist-container">
            {/* Tab Navigation */}
            <div className="tab-navigation">
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
                    <button
                        className={activeTab === 'pcAffidavit' ? 'active' : ''}
                        onClick={() => setActiveTab('pcAffidavit')}
                    >
                        PC Affidavit
                    </button>
                    <button
                        className={activeTab === 'arsonElements' ? 'active' : ''}
                        onClick={() => setActiveTab('arsonElements')}
                    >
                        Arson Elements
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            {showProgress && (
                <div className="progress-container">
                    <div className="progress-info">
                        <span>Progress: {progress.checked} of {progress.total} items ({progress.percentage}%)</span>
                        <button 
                            onClick={() => setShowProgress(false)}
                            className="hide-progress"
                        >
                            Hide
                        </button>
                    </div>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill"
                            style={{ width: `${progress.percentage}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search checklist items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                {searchTerm && (
                    <button 
                        onClick={() => setSearchTerm('')}
                        className="clear-search"
                    >
                        Clear
                    </button>
                )}
            </div>

            {/* Checklist Content */}
            <div className="checklist-content enhanced">
                {Object.entries(activeChecklist).map(([section, items]) => 
                    renderSection(section, items)
                )}
            </div>

            {/* Action Buttons */}
            <button
                onClick={handleClearChecklist}
                className="fixed bottom-4 left-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-all"
                title="Clear Checklist"
            >
                Clear
            </button>

            <EnhancedExportButton
                checkedItems={checkedItems}
                activeTab={activeTab}
                checklistData={activeChecklist}
            />
        </div>
    );
}

export default EnhancedChecklistComponent;