import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productview from "./productview"
import Productcart from "./productcart"
import Home from './Home'
import Categories from "./categories"
import Productlist from "./productlist"
import Wishlist from "./wishlist"
import Checkout from "./checkout"
import Login from "./signin"
import Register from "./register"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route index  element={<Categories />} />
          <Route path="signin" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="productlist" element={<Productlist />} />
          <Route path="productview" element={<Productview />} />
          <Route path="productcart" element={<Productcart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}


export default App
