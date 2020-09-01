import React, {lazy} from 'react';
import { BrowserRouter as Route, Switch, Link, useRouteMatch } from 'react-router-dom';

const Placeholder = lazy(() => import('./placeholder'));

function Nested() {

  let { path, url} = useRouteMatch();
  return (
    <div>
      <h2>Nested Links</h2>
        <ul>
          <li>
            <Link to={`${url}/deep-link`}>Deep Link</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h3>Select a nested route</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Placeholder />
          </Route>
        </Switch>
    </div>
  )
}

export default Nested;