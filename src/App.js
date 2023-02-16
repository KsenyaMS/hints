import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import ControlPanel from './components/controlpanel/ControlPanel';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/test_work">
            <ControlPanel/>
          </Route>
          <Route path="/">
            <Redirect to={'/test_work'}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
