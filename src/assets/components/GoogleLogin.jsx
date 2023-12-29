import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import axios from "axios";
import { CookiesProvider } from "react-cookie";
import { CookieKeys } from "../../utils/cookies";
import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// // import { toast } from "react-toastify";
// import { API_ENDPOINT } from "../../utils/api-endpoint";
// import { CookieKeys, CookieStorage } from "../../utils/cookies";
// import { FcGoogle } from "react-icons/fc";
// import { Button } from "react-bootstrap";

function GoogleLogin({ buttonText }) {
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER_LOGIN}${API_ENDPOINT.GOOGLE}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const token = response.data.data;

      CookiesProvider.set(CookieKeys.AuthToken, token.token);

      // navigate("/");

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // toast.error(error.response.data.message);
        alert(error.response.data.message);
        return;
      }
      //   toast.error(error.message);
      alert(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <button className="border w-[50%] h-[10%] bg-white text-black flex items-center justify-center space-x-2" onClick={() => loginWithGoogle()}>
      <FcGoogle className="text-xl" />
      <span>Login with Google</span>
    </button>
  );
}

export default GoogleLogin;