import {Route, Routes} from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/auth/AuthLayout";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/login";
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashboard from "./pages/admin-view/AdminDashboard";
import AdminFeatures from "./pages/admin-view/AdminFeatures";
import AdminOrders from "./pages/admin-view/AdminOrders";
import AdminProducts from "./pages/admin-view/AdminProducts";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import Error from "./pages/not-found/Error";
import ShoppingListing from "./pages/shoping-view/ShoppingListing";
import ShoppingHome from "./pages/shoping-view/ShoppingHome";
import ShoppingCheckout from "./pages/shoping-view/ShoppingCheckout";
import CheckAuth from "./components/common/CheckAuth";
import Unauth from "./pages/unauth-page/Unauth";

function App() {
  const isAuthenticated = true;
  const user = {
    name: 'imrul',
    // role: 'admin'
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <div>
          <Routes>
            <Route
              path="/auth"
              element={
                <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                  <AuthLayout></AuthLayout>
                </CheckAuth>
              }>
              <Route path="login" element={<Login></Login>}></Route>
              <Route path="register" element={<Register></Register>}></Route>
            </Route>
            <Route
              path="/admin"
              element={
                <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                  <AdminLayout />
                </CheckAuth>
              }>
              <Route path="dashboard" element={<AdminDashboard />}></Route>
              <Route path="Features" element={<AdminFeatures />}></Route>
              <Route path="orders" element={<AdminOrders />}></Route>
              <Route path="products" element={<AdminProducts />}></Route>
            </Route>

            <Route
              path="/shop"
              element={
                <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                  <ShoppingLayout />
                </CheckAuth>
              }>
              <Route path="listing" element={<ShoppingListing />}></Route>
              <Route path="home" element={<ShoppingHome />}></Route>
              <Route path="checkout" element={<ShoppingCheckout />}></Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
            <Route path="unauth-page" element={<Unauth/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
