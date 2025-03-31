import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>    
      {/* header */}
      <Header />
      {/* body */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* footer */}   
    </>
  )
}

export default App
