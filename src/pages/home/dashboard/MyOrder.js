import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const url = `http://localhost:8000/orders/${email}`;

  const { data: orders, isLoading } = useQuery("order", () =>
    fetch(url).then((res) => res.json())
  );

  // console.log(orders);

  if (isLoading) {
    return <h3>Loading</h3>;
  }
  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
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
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src={order.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-ghost badge-sm">{order.part}</span>
              </td>
              <td>{order.quantity}</td>
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
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
