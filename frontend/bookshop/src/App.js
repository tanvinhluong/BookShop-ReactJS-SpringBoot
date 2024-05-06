import './App.css'
import Footer from './customer/components/Footer/Footer'
import Navigation from './customer/components/Navigation/Navigation'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetail/ProductDetails'
import HomePage from './customer/pages/HomePage/HomePage'

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
