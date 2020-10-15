import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Order from './components/Dashboard/Order/Order';
import CustomerService from './components/Dashboard/CustomerService/CustomerService';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AdminService from './components//Dashboard/AdminService/AdminService';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AddService from './components/Dashboard/AddService/AddService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addOrder">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/customerServiceList">
              <CustomerService></CustomerService>
            </PrivateRoute>
            <PrivateRoute path="/addReview">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/adminServiceList">
              <AdminService></AdminService>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/addAdmin">
              <AddAdmin></AddAdmin>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
