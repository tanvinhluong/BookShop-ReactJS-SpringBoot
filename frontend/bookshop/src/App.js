import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Cart from './customer/components/Cart/Cart'
import CheckOut from './customer/components/Checkout/CheckOut'
import Footer from './customer/components/Footer/Footer'
import Navigation from './customer/components/Navigation/Navigation'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetail/ProductDetails'
import HomePage from './customer/pages/HomePage/HomePage'

function App() {
  return (
    <Router>
      <div className="">
        <Navigation />
        <div>
          {/* <HomePage /> */}
          {/* <Product /> */}
          {/* <ProductDetails /> */}
          {/* <Cart /> */}
          <CheckOut />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
