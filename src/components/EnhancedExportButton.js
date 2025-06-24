// EnhancedExportButton.js
import React, { useState } from 'react';
import { Save, FileText, FileSpreadsheet, ChevronDown } from 'lucide-react';

function EnhancedExportButton({ checkedItems, activeTab, checklistData }) {
    const [showOptions, setShowOptions] = useState(false);

    // Format data for text export
    const formatTextExport = () => {
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        
        let exportText = `FIRE INVESTIGATION CHECKLIST\n`;
        exportText += `${'='.repeat(50)}\n\n`;
        exportText += `Type: ${getChecklistTypeName(activeTab)}\n`;
        exportText += `Date: ${date}\n`;
        exportText += `Time: ${time}\n`;
        exportText += `Investigator: ___________________\n`;
        exportText += `Case #: ___________________\n\n`;
        
        // Handle nested structure
        Object.entries(checklistData).forEach(([section, items]) => {
            exportText += `${section.toUpperCase()}\n`;
            exportText += `${'-'.repeat(section.length)}\n`;
            
            if (Array.isArray(items)) {
                items.forEach(item => {
                    if (typeof item === 'string') {
                        const isChecked = checkedItems[item] ? '[✓]' : '[ ]';
                        exportText += `${isChecked} ${item}\n`;
                    } else if (item.subsections) {
                        exportText += `\n${item.label}:\n`;
                        item.subsections.forEach(subItem => {
                            const isChecked = checkedItems[`${item.label}-${subItem}`] ? '[✓]' : '[ ]';
                            exportText += `  ${isChecked} ${subItem}\n`;
                        });
                    }
                });
            } else {
                // Handle nested sections
                Object.entries(items).forEach(([subSection, subItems]) => {
                    exportText += `\n  ${subSection}:\n`;
                    subItems.forEach(subItem => {
                        const isChecked = checkedItems[subItem] ? '[✓]' : '[ ]';
                        exportText += `    ${isChecked} ${subItem}\n`;
                    });
                });
            }
            exportText += '\n';
        });
        
        // Add summary
        const stats = calculateStats();
        exportText += `${'='.repeat(50)}\n`;
        exportText += `SUMMARY\n`;
        exportText += `Total Items: ${stats.total}\n`;
        exportText += `Completed: ${stats.checked} (${stats.percentage}%)\n`;
        exportText += `Remaining: ${stats.remaining}\n`;
        
        return exportText;
    };

    // Format data for CSV export
    const formatCSVExport = () => {
        let csvContent = 'Section,Subsection,Item,Status,Notes\n';
        
        Object.entries(checklistData).forEach(([section, items]) => {
            if (Array.isArray(items)) {
                items.forEach(item => {
                    if (typeof item === 'string') {
                        const status = checkedItems[item] ? 'Completed' : 'Pending';
                        csvContent += `"${section}","","${item}","${status}",""\n`;
                    } else if (item.subsections) {
                        item.subsections.forEach(subItem => {
                            const status = checkedItems[`${item.label}-${subItem}`] ? 'Completed' : 'Pending';
                            csvContent += `"${section}","${item.label}","${subItem}","${status}",""\n`;
                        });
                    }
                });
            } else {
                Object.entries(items).forEach(([subSection, subItems]) => {
                    subItems.forEach(subItem => {
                        const status = checkedItems[subItem] ? 'Completed' : 'Pending';
                        csvContent += `"${section}","${subSection}","${subItem}","${status}",""\n`;
                    });
                });
            }
        });
        
        return csvContent;
    };

    // Format data for detailed report
    const formatDetailedReport = () => {
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        
        let report = `FIRE INVESTIGATION CHECKLIST REPORT\n`;
        report += `${'='.repeat(60)}\n\n`;
        report += `Investigation Type: ${getChecklistTypeName(activeTab)}\n`;
        report += `Report Generated: ${date} at ${time}\n`;
        report += `\n`;
        report += `CASE INFORMATION\n`;
        report += `${'-'.repeat(20)}\n`;
        report += `Case Number: _________________________________\n`;
        report += `Incident Date: _________________________________\n`;
        report += `Incident Location: _________________________________\n`;
        report += `Lead Investigator: _________________________________\n`;
        report += `Agency: _________________________________\n\n`;
        
        // Completed items section
        report += `COMPLETED ITEMS\n`;
        report += `${'-'.repeat(20)}\n`;
        
        Object.entries(checklistData).forEach(([section, items]) => {
            const completedInSection = getCompletedItems(section, items);
            if (completedInSection.length > 0) {
                report += `\n${section}:\n`;
                completedInSection.forEach(item => {
                    report += `  ✓ ${item}\n`;
                });
            }
        });
        
        // Pending items section
        report += `\n\nPENDING ITEMS\n`;
        report += `${'-'.repeat(20)}\n`;
        
        Object.entries(checklistData).forEach(([section, items]) => {
            const pendingInSection = getPendingItems(section, items);
            if (pendingInSection.length > 0) {
                report += `\n${section}:\n`;
                pendingInSection.forEach(item => {
                    report += `  ○ ${item}\n`;
                });
            }
        });
        
        // Summary statistics
        const stats = calculateStats();
        report += `\n\nSUMMARY STATISTICS\n`;
        report += `${'-'.repeat(20)}\n`;
        report += `Total Checklist Items: ${stats.total}\n`;
        report += `Items Completed: ${stats.checked} (${stats.percentage}%)\n`;
        report += `Items Remaining: ${stats.remaining}\n`;
        report += `\n`;
        report += `Investigation Status: ${stats.percentage === 100 ? 'COMPLETE' : 'IN PROGRESS'}\n`;
        
        // Notes section
        report += `\n\nNOTES\n`;
        report += `${'-'.repeat(60)}\n`;
        report += `\n\n\n\n`;
        
        // Signature section
        report += `\n\nCERTIFICATION\n`;
        report += `${'-'.repeat(60)}\n`;
        report += `I certify that this checklist accurately reflects the investigation activities completed.\n\n`;
        report += `Investigator Signature: _________________________________ Date: _____________\n`;
        report += `\nSupervisor Review: _________________________________ Date: _____________\n`;
        
        return report;
    };

    // Helper functions
    const getChecklistTypeName = (tab) => {
        const names = {
            structure: 'Structure Fire Investigation',
            interview: 'Interview Documentation',
            vehicle: 'Vehicle Fire Investigation',
            pcAffidavit: 'Probable Cause Affidavit',
            arsonElements: 'Arson Elements Reference'
        };
        return names[tab] || tab;
    };

    const calculateStats = () => {
        let total = 0;
        let checked = 0;
        
        const countItems = (items) => {
            if (Array.isArray(items)) {
                items.forEach(item => {
                    if (typeof item === 'string') {
                        total++;
                        if (checkedItems[item]) checked++;
                    } else if (item.subsections) {
                        item.subsections.forEach(subItem => {
                            total++;
                            if (checkedItems[`${item.label}-${subItem}`]) checked++;
                        });
                    }
                });
            } else {
                Object.values(items).forEach(subItems => countItems(subItems));
            }
        };
        
        Object.values(checklistData).forEach(items => countItems(items));
        
        return {
            total,
            checked,
            remaining: total - checked,
            percentage: total > 0 ? Math.round((checked / total) * 100) : 0
        };
    };

    const getCompletedItems = (section, items) => {
        const completed = [];
        
        if (Array.isArray(items)) {
            items.forEach(item => {
                if (typeof item === 'string' && checkedItems[item]) {
                    completed.push(item);
                } else if (item.subsections) {
                    item.subsections.forEach(subItem => {
                        if (checkedItems[`${item.label}-${subItem}`]) {
                            completed.push(`${item.label}: ${subItem}`);
                        }
                    });
                }
            });
        } else {
            Object.entries(items).forEach(([subSection, subItems]) => {
                subItems.forEach(subItem => {
                    if (checkedItems[subItem]) {
                        completed.push(`${subSection} - ${subItem}`);
                    }
                });
            });
        }
        
        return completed;
    };

    const getPendingItems = (section, items) => {
        const pending = [];
        
        if (Array.isArray(items)) {
            items.forEach(item => {
                if (typeof item === 'string' && !checkedItems[item]) {
                    pending.push(item);
                } else if (item.subsections) {
                    item.subsections.forEach(subItem => {
                        if (!checkedItems[`${item.label}-${subItem}`]) {
                            pending.push(`${item.label}: ${subItem}`);
                        }
                    });
                }
            });
        } else {
            Object.entries(items).forEach(([subSection, subItems]) => {
                subItems.forEach(subItem => {
                    if (!checkedItems[subItem]) {
                        pending.push(`${subSection} - ${subItem}`);
                    }
                });
            });
        }
        
        return pending;
    };

    // Export handlers
    const handleExport = (format) => {
        let content, filename, mimeType;
        
        switch (format) {
            case 'text':
                content = formatTextExport();
                filename = `${activeTab}-checklist-${new Date().toISOString().split('T')[0]}.txt`;
                mimeType = 'text/plain';
                break;
            case 'csv':
                content = formatCSVExport();
                filename = `${activeTab}-checklist-${new Date().toISOString().split('T')[0]}.csv`;
                mimeType = 'text/csv';
                break;
            case 'report':
                content = formatDetailedReport();
                filename = `${activeTab}-report-${new Date().toISOString().split('T')[0]}.txt`;
                mimeType = 'text/plain';
                break;
            default:
                return;
        }
        
        const blob = new Blob([content], { type: mimeType });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        setShowOptions(false);
    };

    return (
        <div className="export-button-container">
            <button
                onClick={() => setShowOptions(!showOptions)}
                className="export-button primary"
                title="Export Options"
            >
                <Save className="w-6 h-6" />
                <ChevronDown className={`w-4 h-4 transition-transform ${showOptions ? 'rotate-180' : ''}`} />
            </button>
            
            {showOptions && (
                <div className="export-options">
                    <button
                        onClick={() => handleExport('text')}
                        className="export-option"
                    >
                        <FileText className="w-4 h-4" />
                        <span>Export as Text</span>
                    </button>
                    <button
                        onClick={() => handleExport('csv')}
                        className="export-option"
                    >
                        <FileSpreadsheet className="w-4 h-4" />
                        <span>Export as CSV</span>
                    </button>
                    <button
                        onClick={() => handleExport('report')}
                        className="export-option"
                    >
                        <FileText className="w-4 h-4" />
                        <span>Detailed Report</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default EnhancedExportButton;