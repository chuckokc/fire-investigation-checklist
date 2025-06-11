// App.js
// This is our main application file that brings everything together
import React from 'react';
import './App.css';
import ChecklistComponent from './components/ChecklistComponent';

function App() {
  return (
    <div className="App">
      <h1>Fire Investigation Checklist</h1>
      <ChecklistComponent />
      <footer className="credits-footer">
        <p>Created by [Charles Carpenter]</p>
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