/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
import { Login } from "../store/slices/authSlice";

const Baseurl = "https://akashdeep-backend.vercel.app/";

const localhost = "https://akashdeep-backend.vercel.app/";

export const showNotification = ({ type, title, message }) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

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

const upload_Documents = async (id, payload, purpose, navigate) => {
  try {
    const res = await axios.put(
      `${Baseurl}wireTransferr/updateDocument/${id}`,
      payload
    );
    if (purpose === "Education Abroad") {
      window.location.href = "https://merchant.cashfree.com/merchants/login";
    } else {
      navigate("/bank_details");
    }
    showNotification({ message: "Submitted", type: "success" });
  } catch (e) {
    const msg = e.response.data.message;
    showNotification({ message: msg, type: "danger" });
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

export const transfer_money = async (payload, navigate, link) => {
  try {
    const res = await axios.post(`${localhost}wireTransferr`, payload);
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

export const total_charge_bifurcation = async (
  id,
  formPayload,
  setResponse
) => {
  try {
    const res = await axios.put(
      `${localhost}wireTransferr/updatebifurcation/${id}`,
      formPayload
    );
    setResponse(res.data);
  } catch {}
};

export const foriegn_currency_convertor = async (formPayload, setResponse) => {
  try {
    const res = await axios.post(
      `${localhost}foriegncurrency/convert`,
      formPayload
    );
    setResponse(res.data.convertedAmount);
  } catch {}
};

export const book_foriegn_currency = async (formPayload, navigate) => {
  try {
    const res = await axios.post(`${localhost}foriegncurrency`, formPayload);
    navigate(`/Transaction-Details-5/${res.data._id}`);
  } catch {}
};

export const passenger_detail_foriegncurrency = async (id, formPayload) => {
  try {
    const res = await axios.put(
      `${localhost}foriegncurrency/${id}`,
      formPayload
    );
  } catch {}
};

export const get_challan = async (id, setResponse) => {
  try {
    const res = await axios.get(`${localhost}foriegncurrency/${id}`);
    setResponse(res.data.data);
  } catch {}
};

export const getNCR = async (setResponse) => {
  try {
    const res = await axios.get(`${localhost}selectcity/getCityforDelhiNcr`);
    setResponse(res.data.data);
  } catch {}
};

export const get_loans = async (setResponse) => {
  try {
    const res = await axios.get(`${localhost}studentLoan`);
    setResponse(res.data);
  } catch {}
};

export const get_loan_byId = async (id, setResponse) => {
  try {
    const res = await axios.get(`${localhost}studentLoan/${id}`);
    setResponse(res.data);
  } catch {}
};

export const getCountries = async (setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}selectcity/getOtherCountry`);
    const data = res?.data?.data;
    setResponse(data);
  } catch {}
};

export const fetchCountryStates = async ({ setResponse, id }) => {
  try {
    const res = await axios.get(`${Baseurl}selectcity/getState?country=${id}`);
    const data = res?.data?.data;
    setResponse(data);
  } catch {}
};

export const fetchStateCities = async ({ setResponse, id }) => {
  try {
    const res = await axios.get(`${Baseurl}selectcity/cities?state=${id}`);
    const data = res?.data?.data;
    setResponse(data);
  } catch {}
};

export const upload_document = async (id, payload, setResponse) => {
  try {
    const res = await axios.put(
      `${Baseurl}reload_prepaidtravelcard/${id}`,
      payload
    );
    setResponse(res.data);
  } catch {}
};

export const remittance_order = async (payload, navigate) => {
  try {
    const res = await axios.post(`${Baseurl}Buy_prepaidtravelcard`, payload);
    const id = res.data._id;
    navigate(`/Transaction-Details-3/${id}`);
  } catch {}
};

export const getPurpose = async (setResponse) => {
  try {
    const res = await axios.get(`${Baseurl}purposee`);
    setResponse(res.data.msg);
  } catch {}
};

export const uploadImage = async (payload, setResponse) => {
  try {
    const res = await axios.post(
      `${Baseurl}reload_prepaidtravelcard/uploadImage`,
      payload
    );
    setResponse(res.data.data);
  } catch {}
};

export {
  user_Login,
  user_Registration,
  verify_otp,
  RemitterDetail,
  pan_Validation,
  all_currencies,
  upload_Documents,
};
