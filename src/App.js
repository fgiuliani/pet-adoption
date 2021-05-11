import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AddPet from "./pets/AddPet";
import EditPet from "./pets/EditPet";
import React from "react";
import PetList from "./pets/PetList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-pet">
            <AddPet />
          </Route>
          <Route path="/edit-pet">
            <EditPet />
          </Route>
          <Route path="/">
            <PetList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
