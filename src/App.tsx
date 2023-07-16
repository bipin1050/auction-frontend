import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContext, AuthProvider } from "./authentication/auth";
import { useContext } from "react";
import { Error } from "./pages/Error";

function App() {
  const { isLoading } = useContext(AuthContext);
  return (
    <>
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          <Headers />
          <main className="flex-1 w-[85%] 2xl:w-[1100px] mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;
