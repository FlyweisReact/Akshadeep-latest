/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
import { Login } from "../store/slices/authSlice";

const Baseurl = "https://akashdeep12.vercel.app/";

const localhost = "http://localhost:2005/";

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

const RemitterDetail = async (id, payload) => {
  try {
    const res = await axios.put(
      `${localhost}wireTransferr/updateRemitter/${id}`,
      payload
    );
  } catch {}
};

const pan_Validation = async (id, payload, setResponse) => {
  try {
    const res = await axios.put(`${localhost}wireTransferr/pan/${id}`, payload);
    setResponse(res.data);
  } catch {}
};

const all_currencies = async (data) => {
  try {
    const res = await axios.get(`${Baseurl}currency/currencies`);
    data(res.data);
  } catch {}
};

const upload_Documents = async (id, payload) => {
  try {
    const res = await axios.put(
      `${Baseurl}wireTransferr/updateDocument/${id}`,
      payload
    );
    Store.addNotification({
      title: "",
      message: "Submitted",
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

export const enquiry_form = async (payload) => {
  try {
    const res = await axios.post(`${Baseurl}enquiry/createEnquiry`, payload);
    Store.addNotification({
      title: "",
      message: "Our Staff will connect with you shortly !",
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
  } catch {}
};

export const updateBeneficiary = async (id, payload) => {
  try {
    const res = await axios.put(
      `${localhost}wireTransferr/updateBeneficiary/${id}`,
      payload
    );
  } catch {}
};

export const updateDocument = async (id, payload) => {
  try {
    const res = await axios.post(
      `${localhost}wireTransferr/updateDocument/${id}`,
      payload
    );
  } catch {}
};

export const transfer_money = async (payload, navigate, link, type) => {
  try {
    const res = await axios.post(`${localhost}wireTransferr`, payload);
    // if (type === true) {
    //   navigate("/bank_details");
    // } else {
    //   navigate(`${link}/${res?.data?._id}`);
    // }
    navigate(`${link}/${res?.data?._id}`);
  } catch (e) {
    console.log("Transfer Money Err", e);
  }
};

export const get_all_cities = async (setResponse) => {
  try {
    const res = await axios.get(`${localhost}selectcity/getCitybyType/city`);
    const data = res.data.data;
    setResponse(data);
  } catch {}
};

export const get_all_countries = async (setResponse) => {
  try {
    const res = await axios.get(`${localhost}selectcity/getCitybyType/country`);
    const data = res.data.data;
    setResponse(data);
  } catch {}
};

export const get_all_types = async (setResponse, query) => {
  try {
    const res = await axios.get(
      `${localhost}selectcity/getCitybyType/${query}`
    );
    const data = res.data.data;
    setResponse(data);
  } catch {}
};

export const total_charge_bifurcation = async (formPayload , setResponse) => {
  try{
    const res = await axios.put(``)
  }catch{}

}

export {
  user_Login,
  user_Registration,
  verify_otp,
  RemitterDetail,
  pan_Validation,
  all_currencies,
  upload_Documents,
};
