import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import LandingPage from "./components/screens/LandingPage";
import News from "./components/screens/News";

import NewsCards from "./components/screens/NewsCards/NewsCards";
import NewsCard from "./components/screens/NewsCard/NewsCard";
import Calculator from "./components/screens/Calculator";
import BucketList from "./components/screens/BucketList";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/resetpassword/:resetToken"
            component={ResetPasswordScreen}
          />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/news" component={News} />

          <Route path="/newscard" component={NewsCards} />
          <Route path="/newscards" component={NewsCard} />
          <Route path="/newscards" component={NewsCard} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/bucketListScreen" component={BucketList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
