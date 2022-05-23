import React, { useEffect } from "react";
import "./SocialLogin.css";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  // sign in with google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // sign in with github
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  // sign in with facebook
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  const [token] = useToken(githubUser || facebookUser || googleUser);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // handle error
  let displayError;
  if (googleError || githubError || facebookError) {
    displayError = (
      <p className="">
        Error: {googleError?.message}
        {githubError?.message}
        {facebookError?.message}
      </p>
    );

    swal({
      title:
        googleError?.message || githubError?.message || facebookError?.message,
      text: "You clicked the button!",
      icon: "error",
    });
  }

  // loading
  if (googleLoading || githubLoading || facebookLoading) {
    <p>Loading...</p>;
  }

  useEffect(() => {
    if (token) {
      swal({
        title: "You are log in now!",
        text: "You clicked the button!",
        icon: "success",
      });
      navigate(from, { replace: true });
    }
  }, [googleUser || githubUser || facebookUser]);
  // console.log(googleError);
  // handle sign in with google btn
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
  };

  // facebook sign in
  const handleFacebookLogin = async () => {
    await signInWithFacebook();
  };

  // Sign In with github
  const handleSignInWithGithub = async () => {
    await signInWithGithub();
  };

  return (
    <div className="block">
      <button
        onClick={handleSignInWithGoogle}
        className=" flex align-items-center w-full mt-3 py-2 border rounded-full"
      >
        <div className="social-icon ">
          <FcGoogle className="text-2xl ml-2 " />
        </div>
        <div className="social-name flex-1"> Google Sign In</div>
      </button>
      <button
        onClick={handleFacebookLogin}
        style={{ background: "#4267B2" }}
        className="flex items-center w-full mt-3 py-2 text-white rounded-full border "
      >
        <div className="social-icon">
          <FaFacebook className="text-2xl ml-2 " />
        </div>{" "}
        <div className="social-name flex-1">Facebook Sign In</div>
      </button>
      <button
        onClick={handleSignInWithGithub}
        className="flex align-items-center w-full mt-3 py-2 border rounded-full bg-black text-white"
      >
        <div className="social-icon">
          <FaGithub className="text-2xl ml-2" />
        </div>{" "}
        <div className="social-name flex-1">Github Sign In</div>
      </button>
    </div>
  );
};

export default SocialLogin;
