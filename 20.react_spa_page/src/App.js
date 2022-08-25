import { Route, Switch, Redirect } from "react-router-dom";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" /> {/*  root 경로일 시 */}
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:quotesId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuotes />
        </Route>
        <Route path="*">
          {/*  이상한 경로로 접근 시 일치하는 라우트 없으니까 계속 내려오다 여기로 접근*/}
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
