import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { AllNotes } from "./pages/allNotes";
import { AddNewNote } from "./pages/Create";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import {Footer} from "./components/Footer";

function App() {
  return (
      <FirebaseState>
          <AlertState>
            <BrowserRouter>
                <Navbar />
                <div className="container pt-4">
                    <Alert />
                    <Switch>
                        <Route path={'/'} exact component={AllNotes} />
                        <Route path={'/create'} component={AddNewNote} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
          </AlertState>
      </FirebaseState>
  );
}

export default App;
