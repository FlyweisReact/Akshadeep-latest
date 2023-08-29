/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";

const Baseurl = "https://akashdeep12.vercel.app/";

const user_Login =  (payload) => {
    return async (dispatch) => {
  try {
    const res = await axios.post(`${Baseurl}user/loginProfile1`, payload);
    const msg = res.data.msg;
    const token  = res.data.Token
    localStorage.setItem("token" , token)
    Store.addNotification({
      title: "",
      message: msg,
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  }
};

export { user_Login };
