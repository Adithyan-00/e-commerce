import { Routes , Route } from "react-router-dom"
import Home from "../pages/Home"
import Collection from "../pages/Collection"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Navbar from "../components/Navbar"
import DetailesPage from "../pages/DetailesPage"
import Cart from "../pages/Cart"
import Orders from "../pages/Orders"
import Checkout from "../pages/CheckOut"
import Kids from "../pages/Kids"
import Women from "../pages/Women"
import Men from "../pages/Men"
import ProtectedRoute from "../components/authentification/ProtectedRoute"


function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collection/:id" element={<DetailesPage />} />

       
        <Route
          path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders" element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
export default Routers
