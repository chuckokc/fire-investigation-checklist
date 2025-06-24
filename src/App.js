import React from 'react';
import './EnhancedApp.css';  // Make sure this is EnhancedApp.css, not App.css
import EnhancedChecklistComponent from './components/EnhancedChecklistComponent';

function App() {
  const appVersion = '1.3.0';
  
  return (
    <div className="App">
      <div className="app-header">
        <h1>Fire Investigation Checklist</h1>
        <span className="version-number">v{appVersion}</span>
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