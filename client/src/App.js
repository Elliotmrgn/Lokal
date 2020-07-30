import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./pages/Auth/LoginForm";
import SignupForm from "./pages/Auth/SignupForm";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import ProfilePage from "./pages/businesspage/businesspage";
import "bootstrap/dist/css/bootstrap.min.css";
import AUTH from "./utils/AUTH";
import BusinessForm from "./pages/BusinessForm";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult"
import UserPage from "./pages/UserPage/userpage"
import BusinessList from "./pages/BusinessList";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AUTH.getUser().then((response) => {
      // console.log(response.data);
      if (!!response.data.user) {
        setLoggedIn(true);
        setUser(response.data.user);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    });

    return () => {
      setLoggedIn(false);
      setUser(null);
    };
  }, []);

  const logout = (event) => {
    event.preventDefault();

    AUTH.logout().then((response) => {
      // console.log(response.data);
      if (response.status === 200) {
        setLoggedIn(false);
        setUser(null);
      }
    });
  };

  const login = (username, password) => {
    AUTH.login(username, password).then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        // update the state
        setLoggedIn(true);
        setUser(response.data.user);
      }
    });
  };

  return (
    <div className="App">
      {loggedIn && (
        <div>
          <Nav user={user} logout={logout} />
          <div className="main-view">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/businessForm" component={BusinessForm} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/results" component={SearchResult} />
             <Route exact path="/profilepage/:id" component={ProfilePage} />
              <Route exact path="/user/:id" component={UserPage} />
              <Route exact path="/businessList" component={BusinessList} />

              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      )}
      {!loggedIn && (
        <div className="auth-wrapper" style={{ paddingTop: 40 }}>
          <Route exact path="/" component={() => <LoginForm login={login} />} />
          {/* <Route
            exact
            path="/"
            component={() => <LoginForm user={login} />}
          /> */}
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/profilepage" component={ProfilePage} />
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
