import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import swal from "sweetalert";

const AddReview = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const { email, displayName } = user;
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const addReviewBtn = (data) => {
    const { rating, review } = data;
    const addReview = {
      rating: rating,
      review: review,
      name: displayName,
      email: email,
    };
    fetch("http://localhost:8000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((review) => {
        swal({ title: `${review.message}`, icon: "success" });
      });
  };
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h2 className="text-4xl ">Your opinion matters!</h2>
      <p className="text-xl">How was your experience?</p>
      <div className=" card w-1/2 p-5  mt-5 shadow ">
        <form className="" onSubmit={handleSubmit(addReviewBtn)}>
          <input
            className="w-full px-3 py-2 mt-1 rounded border"
            placeholder="Rating"
            type="number"
            {...register("rating", {
              required: "This input is required.",
              max: 5,
            })}
          />{" "}
          {errors?.rating && (
            <p className="text-red-600 error-text text-start">
              {errors?.ratting?.message}
            </p>
          )}
          {errors?.rating && errors?.rating.type === "max" && (
            <p className="text-red-600 error-text text-start">
              Max length exceeded
            </p>
          )}
          <textarea
            className="w-full px-3 py-2 mt-5 rounded border"
            placeholder="FeedBack"
            type="text-area"
            {...register("review", {
              required: "This input is required.",
            })}
          />
          {errors?.review && (
            <p className="text-red-600 error-text text-start">
              {errors?.review?.message}
            </p>
          )}
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

export default AddReview;
