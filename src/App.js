import React from 'react';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

import './App.css';


function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s social media feed</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineData.events} />
      </main>
    </div>
  );
}

export default App;
