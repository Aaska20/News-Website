import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>

      <Navbar />

      <div className="container" style={{ marginTop: "90px" }}>

        <Switch>

          <Route exact path="/">
            <News category="general" />
          </Route>

          <Route exact path="/business">
            <News category="business" />
          </Route>

          <Route exact path="/entertainment">
            <News category="entertainment" />
          </Route>

          <Route exact path="/general">
            <News category="general" />
          </Route>

          <Route exact path="/health">
            <News category="health" />
          </Route>

          <Route exact path="/science">
            <News category="science" />
          </Route>

          <Route exact path="/sports">
            <News category="sports" />
          </Route>

          <Route exact path="/technology">
            <News category="technology" />
          </Route>

        </Switch>

      </div>

    </Router>
  );
}

export default App;