import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import swal from "sweetalert";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const { displayName, email, photoURL, phone } = user;
  // console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // get user  info

  const { data: userInfo, isLoading } = useQuery("order", () =>
    fetch(`http://localhost:8000/user/${email}`).then((res) => res.json())
  );
  if (loading || isLoading) {
    return <h3>Loading</h3>;
  }
  const onSubmit = (data) => {
    const { name, email, phone } = data;
    const updateUser = {
      name: name,
      email: email,
      phone: phone,
    };
    fetch(`http://localhost:8000/updateUser/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((portfolio) => {
        console.log(portfolio.updateUser.modifiedCount);
        const updateUser = portfolio.updateUser.modifiedCount;
        if (updateUser) {
          swal({ title: "User Updated", icon: "success" });
        } else {
          swal({ title: "Please Make sure the changes!", icon: "error" });
        }
      });
  };

  // console.log(userInfo[0].phone);

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="rounded-full" src={photoURL} alt="Album" />
        </figure>
        <div className="card-body">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <label
              className="text-gray-500  mt-5  font-semibold"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              placeholder="Full Name"
              defaultValue={displayName || userInfo[0]?.name}
              {...register("name", {
                // required: "This input is required.",
              })}
            />
            <label
              className="text-gray-500  mt-5  font-semibold"
              htmlFor="email"
            >
              Email Address{" "}
              <span className="text-gray-400">
                (Email address can't modify)
              </span>
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              placeholder="Email address"
              value={email}
              disabled
              {...register("email", {
                // required: "This input is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  // message: `Please include an '@' in the email address. '${email}' is missing an '@`,
                },
              })}
            />
            {errors?.email && (
              <p className="text-red-600 error-text text-start">
                {errors?.email?.message}
              </p>
            )}
            <label
              className="text-gray-500  mt-5  font-semibold"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="w-full px-3 py-2 mt-1 rounded border"
              placeholder="Phone"
              defaultValue={userInfo[0]?.phone}
              type="number"
              {...register("phone", {
                required: "This input is required.",
              })}
            />

            <div className="mt-5 ">
              <input
                className="text-base  text-white btn btn-primary text-bold bg-gradient-to-r from-primary to-secondary "
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
