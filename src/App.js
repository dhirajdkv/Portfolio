import React from 'react';
import First from './First'
import Resume from './Resume'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router >
      <div>
        <Route path="/" exact component={First}/>
        <Route path="/about" component={Resume} />
      </div>
      </Router>
    </div>
  )
}

export default App;