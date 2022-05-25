import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [user, Loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (Loading) {
    return <h3>Loading</h3>;
  }
  return (
    <div className="drawer drawer-mobile m-5 gap-8">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}

        <Outlet></Outlet>
      </div>
      <div className="drawer-side shadow-xl  ">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          {admin || (
            <>
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addReview">Add Reviews</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>

          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
