import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import MainSearch from './pages/MainSearch';
import ContributeData from './pages/ContributeData';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MainSearch />
          </Route>
          <Route path="/contribute-data">
            <ContributeData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
