import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom"; 

function SearchNews() {

  const { query } = useParams();

  return <News search={query} />;
}


function App() {

  return (
    <Router>
    <Navbar/>

      <div className="container" style={{ marginTop: "90px" }}>

        <Switch>

          <Route exact path="/">
            <News key="general" category="general"  />
          </Route>

          <Route exact path="/business">
            <News key="business" category="business"  />
          </Route>

          <Route exact path="/entertainment">
            <News key="entertainment" category="entertainment"  />
          </Route>

          <Route exact path="/general">
            <News key="general" category="general"  />
          </Route>

          <Route exact path="/health">
            <News key="health" category="health"  />
          </Route>

          <Route exact path="/science">
            <News key="science" category="science"  />
          </Route>

          <Route exact path="/sports">
            <News key="sports" category="sports"  />
          </Route>

          <Route exact path="/technology">
            <News key="technology" category="technology"  />
          </Route>

          <Route exact path="/search/:query">
            <SearchNews />
          </Route>

        </Switch>

      </div>

    </Router>
  );
}
export default App;