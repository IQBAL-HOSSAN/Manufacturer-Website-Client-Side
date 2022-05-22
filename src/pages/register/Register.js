import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import SocialLogin from "../../components/socialLogin/SocialLogin";
const Register = () => {
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

  const email = getValues("email");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // FIREBASE AUTHENTICATION
  // CREATE USER WITH EMAIL AND PASSWORD
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // SEND EMAIL VERIFICATION
  const [sendEmailVerification, verificationSending, verificationError] =
    useSendEmailVerification(auth);

  // Navigate
  if (user) {
    navigate(from, { replace: true });
  }

  // LOADING
  if (loading || verificationSending) {
    return <h3>Loading...</h3>;
  }

  // ERROR HANDLING
  let displayError;
  if (error || verificationError) {
    displayError = (
      <p className="error-text text-danger text-start">
        Error: {error?.message} {verificationError?.message}
      </p>
    );

    swal({
      title: error?.message || verificationError?.message,
      icon: "error",
    });
  }

  // FORM ON SUBMIT
  const handleRegisterBtn = async (data) => {
    const { email, password } = data;

    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    await swal({
      title: "Send email",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <div className="card w-96 p-5 shadow-xl">
          <h2 className="text-4xl font-semibold text-center mb-4">Register!</h2>
          <form className="" onSubmit={handleSubmit(handleRegisterBtn)}>
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
                  message: `Please include an '@' in the email address. '${email}' is missing an '@`,
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
                value="Register"
              />
            </div>
            <p className="mt-5">
              Already register?
              <Link className="text-primary ml-2" to="/login">
                Login
              </Link>
            </p>
          </form>
          {/* Divider */}
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
          </div>
          {/* Social Login */}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
