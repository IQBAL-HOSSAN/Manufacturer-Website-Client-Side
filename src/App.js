import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RequireAdmin from "./auth/RequireAdmin";
import RequireAuth from "./auth/RequireAuth";
import Navbar from "./components/navbar/Navbar";
import AddReview from "./pages/home/dashboard/AddReview";
import Dashboard from "./pages/home/dashboard/Dashboard";
import MyOrder from "./pages/home/dashboard/MyOrder";
import MyProfile from "./pages/home/dashboard/MyProfile";
import Payment from "./pages/home/dashboard/Payment";
import Users from "./pages/home/dashboard/Users";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AddPart from "./pages/parts/AddPart";
import Portfolio from "./pages/portfolio/Portfolio";
import Purchase from "./pages/purchase/Purchase";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import useAdmin from "./hooks/useAdmin";
import Blog from "./pages/blog/Blog";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route
          path="/addPart"
          element={
            <RequireAdmin>
              <AddPart />
            </RequireAdmin>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {admin || <Route index element={<MyOrder />} />}
          <Route path="payment/:id" element={<Payment />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>{" "}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
