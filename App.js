import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Contact from "./Contact";
import Agent from "./Agent";
import Tickets from "./Tickets";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/agent">Agent</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Agent" component={Agent} />

          <Route path="/Contact" component={Contact}></Route>
          <Route path="/Tickets" component={Tickets}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
