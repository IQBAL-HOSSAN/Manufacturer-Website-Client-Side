import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [part, setPart] = useState({});
  const [user] = useAuthState(auth);

  const { img, name, desc, price, quantity } = part;

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

  console.log(selectQuantity);
  useEffect(() => {
    fetch(`http://localhost:8000/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);

  return (
    <section className="container py-20 lg:px-32">
      <div className=" grid grid-cols-1  mx-auto gap-y-8 md:gap-x-8 justify-items-center ">
        <div>
          <div class="card  bg-base-100 shadow-xl">
            <figure>
              <img height="400px" src={img} alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{name}</h2>
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
              <form className="" onSubmit={handleSubmit()}>
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
                    maxLength: 5,
                  })}
                />
                {errors?.name && (
                  <p className="text-red-600 error-text text-start">
                    {errors?.name?.message}
                  </p>
                )}{" "}
                {/* {errors.name && errors.name.type === "required" && (
                  <span className="text-red-600 error-text text-start">
                    This is required
                  </span>
                )} */}
                {errors.name && errors.name.type === "maxLength" && (
                  <span className="text-red-600 error-text text-start">
                    Max length exceeded
                  </span>
                )}
                <label
                  className="text-gray-500  mt-5  font-semibold"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="w-full px-3 py-2 mt-1 rounded border"
                  placeholder="Email address"
                  {...register("email", {
                    required: "This input is required.",
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
                <label
                  className="text-gray-500 mt-5 font-semibold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mt-1 rounded border"
                  placeholder="Password"
                  {...register("password", {
                    required: "This input is required.",
                  })}
                />
                {errors?.password && (
                  <p className="text-red-600 error-text text-start">
                    {errors?.password?.message}
                  </p>
                )}
                <div className="mt-5 text-center">
                  <input
                    disabled={selectQuantity < 20 || selectQuantity > 100}
                    className="text-base w-full text-white btn btn-primary text-bold bg-gradient-to-r from-primary to-secondary "
                    type="submit"
                    value="Purchase"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="w-full">
          <form className="" onSubmit={handleSubmit()}>
            <input
              className="w-full px-3 py-2 rounded border"
              placeholder="Name"
              {...register("name", {
                required: "This input is required.",
              })}
            />
            {errors?.name && (
              <p className="text-red-600 error-text text-start">
                {errors?.name?.message}
              </p>
            )}
            <input
              className="w-full px-3 py-2 mt-5 rounded border"
              placeholder="Email address"
              {...register("email", {
                required: "This input is required.",
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
            <input
              className="w-full px-3 py-2 mt-5 rounded border"
              placeholder="Password"
              {...register("password", {
                required: "This input is required.",
              })}
            />
            {errors?.password && (
              <p className="text-red-600 error-text text-start">
                {errors?.password?.message}
              </p>
            )}

            <div className="mt-5 text-center">
              <input
                className="text-base w-full text-white btn btn-primary text-bold bg-gradient-to-r from-primary to-secondary "
                type="submit"
                value="Purchase"
              />
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default Purchase;
