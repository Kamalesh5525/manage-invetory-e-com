import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store'; // Import the Redux store
import Login from './components/Login'; // Import Login component
import SignUp from './components/SignUp'; // Import Sign-Up component
import ProductCatalog from './components/ProductCatalog'; // Import Product Catalog component
import OrderHistory from './components/OrderHistory'; // Import Order History component
import AdminPanel from './components/AdminPanel'; // Import Admin Panel component
import Header from './components/Header'; // Import Header component
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute component
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart'; // Import Cart component
import './index.css'

const App = () => {
  const isAdmin = true; // Set this based on your authentication logic

  return (
    <Provider store={store}>
      <Router>
        <Header /> {/* Include the Header here */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route 
            path="/order-history" 
            element={
              <PrivateRoute>
                <OrderHistory />
              </PrivateRoute>
            } 
          />
         

          <Route 
            path="/cart" 
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            } 
          />
          
          
          
          <Route 
            path="/admin" 
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            } 
          />
           <Route 
            path="/" 
            element={
              <PrivateRoute>
                <ProductCatalog isAdmin={isAdmin} />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
