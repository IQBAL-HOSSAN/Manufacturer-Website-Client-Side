import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const [token] = useToken(user);

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const email = getValues("email");

  // NAVIGATE
  if (token) {
    navigate(from, { replace: true });
  }

  // LOADING
  if (loading || sending) {
    return <h3>Loading</h3>;
  }

  // ERROR HANDLING
  let displayError;
  if (error) {
    displayError = (
      <p className="error-text text-danger text-start">
        Error: {error?.message}
      </p>
    );

    swal({
      title: error?.message,
      icon: "error",
    });
  }

  // FORM SUBMIT
  const handleLoginBtn = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(email, password);
    await swal({
      title: "You are logged in now!",
      icon: "success",
    });
  };
  // reset password
  const resetPassword = async () => {
    const resetEmail = getValues("email");
    if (resetEmail) {
      await sendPasswordResetEmail(email);
      swal({
        title: "Send Email",
        icon: "success",
      });
    } else {
      swal({
        title: "Please enter your email address",
        icon: "error",
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card w-96 p-5 shadow-xl">
        <h2 className="text-4xl font-semibold text-center mb-4">Login!</h2>
        <form onSubmit={handleSubmit(handleLoginBtn)}>
          <input
            className="w-full px-3 py-2 rounded border"
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

          <input
            className="text-base w-full text-white btn btn-primary text-bold bg-gradient-to-r mt-8 from-primary to-secondary "
            type="submit"
            value="Login"
          />
          <p className="mt-5">
            New to doctor portal?
            <Link className="text-primary ml-2" to="/register">
              Create a new account
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
  );
};

export default Login;
