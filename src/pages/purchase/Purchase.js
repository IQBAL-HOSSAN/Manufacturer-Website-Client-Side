import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import swal from "sweetalert";

const Purchase = () => {
  const { id } = useParams();
  const [part, setPart] = useState({});
  const [user] = useAuthState(auth);

  const { img, name, desc, price, quantity } = part;
  // const totalPrice = data.price * data.quantity;

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const selectQuantity = getValues("quantity");
  const selectPrice = getValues("price");

  const convertPrice = parseInt(selectPrice);

  const totalPrice = price * selectQuantity;

  console.log(
    typeof totalPrice,
    typeof selectPrice,
    typeof convertPrice,
    convertPrice,
    selectPrice,
    totalPrice
  );
  useEffect(() => {
    fetch(`http://localhost:8000/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);

  const handleOrderBtn = (data) => {
    console.log(data);

    const createOrder = {
      img: img,
      part: data.productname,
      quantity: data.quantity,
      price: data.price,
      name: data.name,
      address: data.address,
      email: user.email,
    };
    console.log(createOrder);
    fetch(`http://localhost:8000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          swal({
            title: "Purchase has been successfully placed!",
            icon: "success",
          });
        }
      });
  };

  return (
    <section className="container py-20 lg:px-32">
      <div className=" grid grid-cols-1  mx-auto gap-y-8 md:gap-x-8 md:grid-cols-2  lg:grid-cols-2">
        <div>
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img className="h-96" src={img} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{desc}</p>
              <p>
                <strong>Quantity:</strong> {quantity}
              </p>
              <p>
                <strong>Price:</strong> {price}
              </p>
              {/* <button className="text-base text-white btn btn-primary text-bold bg-gradient-to-r from-primary to-secondary ">
                Purchase
              </button> */}
            </div>
          </div>
        </div>
        <div className="w-full p-5 shadow">
          <form className="" onSubmit={handleSubmit(handleOrderBtn)}>
            <label className="text-gray-500  mt-5  font-semibold" htmlFor="img">
              Product Image
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              value={img}
              disabled
              {...register("img", {
                // required: "This input is required.",
              })}
            />
            <label
              className="text-gray-500  mt-5  font-semibold"
              htmlFor="productName"
            >
              Product Name
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              value={name}
              disabled
              {...register("productname", {
                // required: "This input is required.",
              })}
            />
            <label
              className="text-gray-500  mt-5  font-semibold"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              placeholder="Min-quantity-20 & Max-quantity-100"
              {...register("quantity", {
                required: "This input is required.",
                max: 100,
                min: 20,
              })}
            />
            {errors?.quantity && (
              <p className="text-red-600 error-text text-start">
                {errors?.quantity?.message}
              </p>
            )}
            {errors?.quantity && errors?.quantity.type === "min" && (
              <p className="text-red-600 error-text text-start">
                Min length exceeded
              </p>
            )}
            {errors?.quantity && errors?.quantity.type === "max" && (
              <p className="text-red-600 error-text text-start">
                Max length exceeded
              </p>
            )}
            <label
              className="text-gray-500  mt-5  font-semibold"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              value={price}
              type="number"
              {...register("price", {
                required: "This input is required.",
              })}
            />
            <label
              className="text-gray-500  mt-5  font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              placeholder="Name"
              id="name"
              {...register("name", {
                required: "  This is required",
              })}
            />
            {errors?.name && (
              <p className="text-red-600 error-text text-start">
                {errors?.name?.message}
              </p>
            )}
            <label
              className="text-gray-500  mt-5  font-semibold"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              placeholder="Address"
              id="address"
              {...register("address", {})}
            />
            <label
              className="text-gray-500  mt-5  font-semibold"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              placeholder="Email address"
              value={user.email}
              disabled
              {...register("email", {
                // required: "This input is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: `Please include an '@' in the email address. '' is missing an '@`,
                },
              })}
            />
            {errors?.email && (
              <p className="text-red-600 error-text text-start">
                {errors?.email?.message}
              </p>
            )}
            <div className="mt-5 text-center">
              <input
                // disabled={selectQuantity < 20 || selectQuantity > 100}
                className="text-base w-full text-white btn btn-primary text-bold bg-gradient-to-r from-primary to-secondary "
                type="submit"
                value="Purchase"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
