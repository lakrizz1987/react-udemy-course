import { Redirect, Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import CreateQuotes from "./pages/CreateQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:id'>
          <QuoteDetails />
        </Route>
        <Route path='/create' >
          <CreateQuotes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
