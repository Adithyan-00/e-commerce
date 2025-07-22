import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './components/CartContext.jsx'
import { OrderProvider } from './components/orderContext.jsx'
import { AuthProvider } from './components/authentification/Auth.jsx'
import { Whishlist } from './components/WhishlistCon.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/e-commerce">
      <AuthProvider>
        <Whishlist>
          <CartProvider>
            <OrderProvider>
              <App />
            </OrderProvider>
          </CartProvider>
        </Whishlist>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
