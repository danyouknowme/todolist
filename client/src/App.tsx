import React from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Create from './views/Create';
import Show from './views/Show';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/:id">
          <Show />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
