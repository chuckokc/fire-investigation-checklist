// ExportButton.js
// This component creates a button that exports checklist data to a formatted text file
import React from 'react';
import { Save } from 'lucide-react';

// The ExportButton component takes three props:
// - checkedItems: the current state of checked boxes
// - activeTab: which checklist is currently showing
// - checklistData: the items and sections in the current checklist
function ExportButton({ checkedItems, activeTab, checklistData }) {
    // This function organizes our data into a readable format for export
    const formatChecklistData = () => {
        // Create a header with current date and time for documentation
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        
        // Start building our export text with header information
        let exportText = `Fire Investigation Checklist\n`;
        exportText += `Date: ${date}\n`;
        exportText += `Time: ${time}\n\n`;
        
        // Add which type of checklist this is (Structure, Vehicle, or Interview)
        exportText += `Type: ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Fire Investigation\n\n`;
        
        // Go through each section of our checklist and format its items
        Object.entries(checklistData).forEach(([section, items]) => {
            // Add the section header
            exportText += `${section}:\n`;
            
            // Add each item in the section with its checked status
            items.forEach(item => {
                // Show whether each item was checked or not
                const isChecked = checkedItems[item] ? '[✓]' : '[ ]';
                exportText += `${isChecked} ${item}\n`;
            });
            
            // Add a blank line between sections for readability
            exportText += '\n';
        });
        
        return exportText;
    };

    // This function handles the actual export process when the button is clicked
    const handleExport = () => {
        // Get our formatted checklist data
        const exportText = formatChecklistData();
        
        // Create a file-like object containing our text
        const blob = new Blob([exportText], { type: 'text/plain' });
        
        // Create a URL that points to our file data
        const url = window.URL.createObjectURL(blob);
        
        // Create a link element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        
        // Generate a filename including the date and checklist type
        const fileName = `${activeTab}-checklist-${new Date().toISOString().split('T')[0]}.txt`;
        link.setAttribute('download', fileName);
        
        // Add the link to the page, click it to start the download, then clean up
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    // Render our export button with a nice floating style
    return (
        <button
            onClick={handleExport}
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
            title="Export Checklist"
        >
            <Save className="w-6 h-6" />
        </button>
    );
}

export default ExportButton;