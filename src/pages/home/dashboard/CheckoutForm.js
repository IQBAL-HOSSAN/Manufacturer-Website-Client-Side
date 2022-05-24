import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const CheckoutForm = ({ order }) => {
  const { _id, part, price, name, email } = order;
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  // console.log(typeof price);
  useEffect(() => {
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [price]);

  const handleCardSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // confirm card payment

    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      }
    );
    // console.log(paymentIntent);

    if (error || intentError) {
      swal({ title: `${error.message}`, icon: "error" });
    } else {
      swal({
        title: "Payment Successful",
        text: `Your transaction id: ${paymentIntent.id}`,
        icon: "success",
      });

      // store payment details in database
      const payment = {
        transactionId: paymentIntent.id,
        productName: part,
        name: name,
        productId: _id,
      };
      fetch(`http://localhost:8000/order/${_id}`, {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <form>
        <CardElement />
        <button
          onClick={handleCardSubmit}
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
