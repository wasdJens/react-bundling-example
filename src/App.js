import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('./components/home'));
const Other = lazy(() => import('./components/other'));
const Nested = lazy(() => import('./components/nested'));

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/other">Other</Link>
            </li>
            <li>
              <Link to="/nested">Nested</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/other" component={Other}/>
            <Route path="/nested" component={Nested}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
