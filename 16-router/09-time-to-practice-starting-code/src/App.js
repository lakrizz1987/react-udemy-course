import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import React, { Suspense } from "react";
import AllQuotes from "./pages/AllQuotes";

import QuoteDetails from "./pages/QuoteDetails";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const CreateQuotes = React.lazy(() => import('./pages/CreateQuote'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
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
          <Route path='*' render={() => <h1 style={{ textAlign: 'center', color: '#008080' }}>No page found!!!</h1>} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
