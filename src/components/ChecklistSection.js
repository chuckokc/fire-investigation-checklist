// ChecklistSection.js
// This component handles the display of a single section of our checklist
import React from 'react';

function ChecklistSection({ title, items, checkedItems, onCheckItem }) {
    return (
        <div className="checklist-section">
            <h3>{title}</h3>
            <div className="checklist-items">
                {items.map((item, index) => (
                    <div key={index} className="checklist-item">
                        <input
                            type="checkbox"
                            id={`${title}-${index}`}
                            checked={checkedItems[item] || false}
                            onChange={() => onCheckItem(item)}
                        />
                        <label htmlFor={`${title}-${index}`}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChecklistSection;