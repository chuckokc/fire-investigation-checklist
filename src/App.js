import React from 'react';
import './EnhancedApp.css';
import EnhancedChecklistComponent from './components/EnhancedChecklistComponent';
import { version } from '../package.json';  // Import version

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <h1>Fire Investigation Checklist</h1>
        <span className="version-number">v{version}</span>
      </div>
      <EnhancedChecklistComponent />
      <footer className="credits-footer">
        <p>Created by Charles Carpenter</p>
        <a 
          href="mailto:chuckokc@gmail.com?subject=Fire Investigation Checklist Feedback"
          className="feedback-link"
        >
          Send Feedback
        </a>
      </footer>
    </div>
  );
}

export default App;