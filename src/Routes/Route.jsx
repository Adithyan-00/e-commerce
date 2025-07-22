
import { Routes , Route} from "react-router-dom"
import Home from "../pages/Home"
import Collection from "../pages/Collection"
import Login from "../pages/Login"
import Register from "../pages/Register"
import DetailesPage from "../pages/DetailesPage"
import Cart from "../pages/Cart"
import Orders from "../pages/Orders"
import Checkout from "../pages/CheckOut"
import Kids from "../pages/Kids"
import Women from "../pages/Women"
import Men from "../pages/Men"
import ProtectedRoute from "../components/authentification/ProtectedRoute"
import Support from "../pages/Support"
import MainlayOut from "../layouts/mainlay"
import AuthLay from "../layouts/AuthLay"
import HomeLayiut from "../layouts/HomeLayiut"
import Dashboard from "../adminpages/Dashboard"
import AdminLay from "../layouts/AdminLay"
import Products from "../adminpages/Products"
import AdminOrders from "../adminpages/adminorders"


function Routers() {



  return (
    <>
   

      

      <Routes>
        
        <Route element={<HomeLayiut/>}>
          <Route path="/" element={<Home/>}/>
        </Route>


        <Route element={<MainlayOut/>}>
        <Route path="/collection" element={<Collection />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/collection/:id" element={<DetailesPage />} />
        <Route path="/support" element={<Support/>} />
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Route>

        <Route element={<AuthLay/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>


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


        <Route element={<AdminLay />}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="adminorders" element={<AdminOrders/>}/>
        </Route>

      </Routes>
    </>
  );
}
export default Routers