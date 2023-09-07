import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { IntlProvider } from "react-intl";
import ControlPanel from './components/controlpanel/ControlPanel';
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

function App() {
  let [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <IntlProvider 
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.RUSSIAN}
    >
      <Router>
          <Switch>
            <Route path="/hints/test_work">
              <ControlPanel onClick={(val) => {console.log({val});; setLocale(val);}}/>
            </Route>
            <Route path="/hints">
              <Redirect to={'/hints/test_work'}/>
            </Route>
          </Switch>
      </Router>
    </IntlProvider>
  );
}

export default App;
