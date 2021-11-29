import React from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Create from './views/Create';
import Show from './views/Show';
import Edit from './views/Edit';
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
        <Route exact path="/:id">
          <Show />
        </Route>
        <Route path="/:id/edit">
          <Edit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
