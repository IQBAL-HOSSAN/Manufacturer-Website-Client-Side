import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrder = () => {
  const [user, Loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const email = user.email;
  const url = `http://localhost:8000/orders/${email}`;

  useEffect(() => {
    fetch(url).then((res) => res.json().then((data) => setOrders(data)));
  }, []);

  // console.log(orders);

  if (Loading) {
    return <h3>Loading</h3>;
  }

  const handleDeleteBtn = (id) => {
    fetch(`http://localhost:8000/orders/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {orders?.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={order.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">{order.part}</span>
              </td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>
                {order.price && !order.paid && (
                  <Link to={`payment/${order._id}`}>
                    <button className="btn btn-xs btn-success">Pay</button>
                  </Link>
                )}
                {order.price && order.paid && (
                  <span className="text-success">Paid</span>
                )}
              </td>
              <td>
                {order.price && !order.paid && (
                  <button
                    onClick={() => handleDeleteBtn(order._id)}
                    className="btn btn-xs "
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
