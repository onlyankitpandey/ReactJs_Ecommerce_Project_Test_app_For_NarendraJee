import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./view/pages/Contact";
import Home from "./view/pages/Home";
import Layout from "./Layouts";
import LoginReg from './view/pages/auth/LoginReg';
import ResetPassword from './view/pages/auth/ResetPassword';
import SendPasswordResetEmail from './view/pages/auth/SendPasswordResetEmail';
import ProductDetails from "./view/pages/Products/ProductDetails";
import Products from './view/pages/Products/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/products" element={<Products />} />
            <Route path="/product-details" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
