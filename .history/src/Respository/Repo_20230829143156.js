/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
import { Login } from "../store/slices/authSlice";

const Baseurl = "https://akashdeep12.vercel.app/";

const user_Login = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${Baseurl}user/loginProfile1`, payload);
      const msg = res.data.msg;
      const token = res.data.Token;
      localStorage.setItem("token", token);
      dispatch(Login());
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
};

const user_Registration = async (payload, setOtpModalShow, props) => {
  try {
    const res = await axios.post(`${Baseurl}user/users`, payload);
    const msg = res.data.msg;
    Store.addNotification({
      title: "",
      message: msg,
      type: "info",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
    props.onHide();
    setOtpModalShow(true);
  } catch (e) {
    const msg = e.response.data.msg;
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

const verify_otp = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${Baseurl}user/verifySignIn`, payload);
      const msg = res.data.msg;
      const token = res.data.Token;
      dispatch(Login());
      localStorage.setItem("token", token);
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
};

const RemitterDetail = async (payload) => {
  try {
    const res = await axios.post(`${Baseurl}remi`);
  } catch {}
};

const pan_Validation = async (id, payload) => {
  try {
    const res = await axios.put(`${Baseurl}pan/${id}`, payload);
  } catch {}
};

const all_currencies = async (data) => {
  try {
    const res = await axios.get(`${Baseurl}currency/currencies`);
    data(res.data);
  } catch {}
};

const upload_Documents = async (id , payload) => {
  try{  
    const res =await axios.put(`${}`)

  }catch(e){
    const msg = e.response.data.message
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
}

export {
  user_Login,
  user_Registration,
  verify_otp,
  RemitterDetail,
  pan_Validation,
  all_currencies,
};
