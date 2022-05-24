import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import auth from "../../firebase.init";

const AddPart = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const email = user.email;

  const addPartBtn = (data) => {
    const { img, name, price, productname, quantity } = data;
    const part = {
      img: img,
      part: productname,
      price: price,
      quantity: quantity,
      name: name,
      email: email,
    };
    fetch("http://localhost:8000/part", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(part),
    })
      .then((res) => res.json())
      .then((part) => {
        swal({ title: `${part.message}`, icon: "success" });
      });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" card w-96 p-5 shadow-xl ">
        <form className="" onSubmit={handleSubmit(addPartBtn)}>
          <label className="text-gray-500  mt-5  font-semibold" htmlFor="img">
            Product Image
          </label>
          <input
            className="w-full px-3 py-2 mt-1 rounded border"
            // type="file"
            {...register("img", {
              required: "This input is required.",
            })}
          />{" "}
          {errors?.img && (
            <p className="text-red-600 error-text text-start">
              {errors?.img?.message}
            </p>
          )}
          <label
            className="text-gray-500  mt-5  font-semibold"
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            className="w-full px-3 py-2 mt-1 rounded border"
            {...register("productname", {
              required: "This input is required.",
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
            })}
          />
          {errors?.quantity && (
            <p className="text-red-600 error-text text-start">
              {errors?.quantity?.message}
            </p>
          )}
          <label className="text-gray-500  mt-5  font-semibold" htmlFor="price">
            Price
          </label>
          <input
            className="w-full px-3 py-2 mt-1 rounded border"
            type="number"
            {...register("price", {
              required: "This input is required.",
            })}
          />
          <label className="text-gray-500  mt-5  font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 mt-1 rounded border"
            value={user?.displayName}
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
          <label className="text-gray-500  mt-5  font-semibold" htmlFor="email">
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
          <div className="mt-5 text-center">
            <input
              // disabled={selectQuantity < 20 || selectQuantity > 100}
              className="text-base w-full text-white btn btn-primary text-bold bg-gradient-to-r from-primary to-secondary "
              type="submit"
              value="Add Part"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPart;
