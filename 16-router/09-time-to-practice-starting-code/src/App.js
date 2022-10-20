import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllQuotes from "./pages/AllQuotes";
import CreateQuotes from "./pages/CreateQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <Layout>
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
        <Route path='*' render={()=><h1 style={{textAlign:'center',color:'#008080'}}>No page found!!!</h1>}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
