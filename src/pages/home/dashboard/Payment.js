import React from "react";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "react-query";

const stripePromise = loadStripe(
  "pk_test_51L0mozGqaNtXNBAWQ6iYMmw4BfL3Vo2YXfJWEZmvfy6RrNAxKlQ1SU9j9HVc4FLGh1JZb94ssMc02A7RxmNtZPgL009W5uYkKu"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/order/${id}`;

  const { data: order, isLoading } = useQuery("order", () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  // console.log(order);
  return (
    <div className="mt-10 ml-20 flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-3">Payment</h2>
      <div className="flex justify-center">
        <div
          style={{ background: "#e23d8a" }}
          className="divide-y-8  h-1 w-20"
        ></div>
      </div>{" "}
      <div className=" shadow-xl card   w-1/2 bg-base-100 justify-center mt-8">
        <div className="card-body ">
          <p className="text-xl">
            Hello sir: {order?.name ? order.name : " Sir"}
          </p>
          <h2 className="text-2xl font-bold text-primary">
            Please pay for:{order.part}
          </h2>
          <p>Your order: {order.date}</p>
          <span>Please pay: ${order.price}</span>
        </div>{" "}
      </div>
      <div className="card shadow-2xl  w-1/2  bg-base-100 mt-5 p-5">
        <div className="car-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
