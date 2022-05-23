import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "./auth/RequireAuth";
import Navbar from "./components/navbar/Navbar";
import AddReview from "./pages/home/dashboard/AddReview";
import Dashboard from "./pages/home/dashboard/Dashboard";
import MyOrder from "./pages/home/dashboard/MyOrder";
import MyProfile from "./pages/home/dashboard/MyProfile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Purchase from "./pages/purchase/Purchase";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route> */}
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
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
          <Route index element={<MyOrder />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="myProfile" element={<MyProfile />} />
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
