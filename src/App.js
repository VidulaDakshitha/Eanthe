import React, { Component } from "react";
import { HashRouter, Route, Switch,Redirect,BrowserRouter as Router } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import HomePage from "./views/Pages/HomePage/HomePage";
import CustomOrder from "./views/Pages/CustomOrder/CustomOrder";
import CartItem from "./views/Pages/CartItem/CartItem";
import Collection from "./views/Pages/Collection/Collection";
import Payment from "./views/Pages/Payment/Payment";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import DotLoader from "react-spinners/DotLoader";
import "./App.scss";
import Loader from "react-spinners/CircleLoader";
import "./style.css";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
//const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const loading = () => (
  <div> 
  </div>
);
// Containers
// const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
// const HomePage=React.lazy(() => import("./views/Pages/HomePage/HomePage"));

// const Page404 = React.lazy(() => import("./views/Pages/Page404"));
// const Page500 = React.lazy(() => import("./views/Pages/Page500"));



// const Sample=React.lazy(() => import("./views/Pages/Sample/Sample"));

// const PrivateRouteUser = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     //fakeAuth.isAuthenticated === true
//     localStorage.getItem("AccessToken")!==""
//       ? <Component {...props} />
//       : <Redirect to={{
//           pathname: '/#/login',
         
//         }} />
       
//   )} />
// )

class App extends Component {
  render() {
    return (
      <Router>
       
          <Switch>

          {/* <Route
              exact
              path="/"
              name="Loader Page"
              render={(props) => <Loaders {...props} />}
            /> */}


              {/* <Route
              exact
              path="/scan"
              name="Qrscanner Page"
              render={(props) => <Qrscanner {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
        <Route
              exact
              path="/generator"
              name="QRgenerator"
              render={(props) => <QRgenerator {...props} />}
            />
            <Route
              exact
              path="/sample"
              name="Sample Page"
              render={(props) => <Sample {...props} />}
            /> */}

<Route
              exact
              path="/main"
              name="Main Page"
              component= {HomePage}
            />

            {/* <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />

            <Route
              path="/menu"
              name="Menu Page"
              render={(props) => <Menupage {...props} />}
            /> */}

            {/* <Route
              exact
              path="/404"
              name="Page 404"
               component= {Page404}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              component= {Page500} 
            /> */}

              {/* <Route
              exact
              path="/regsiterconfirm"
              name="Page 500"
              render={(props) => <RegisterConfirm {...props} />}
            /> */}

    <Route
              path="/order"
              name="order"
              component= {CustomOrder}
            />


                <Route
              path="/cart"
              name="cart"
              component= {CartItem}
            />
   
           
           

            <Route
              path="/collection"
              name="collection"
              component= {Collection}
            />

                <Route
              path="/payment"
              name="payment"
              component= {Payment}
            />

                 <Route
              path="/"
              name="Home"
              component= {HomePage}
            />

          </Switch>

      </Router>
    );
  }
}

export default App;
