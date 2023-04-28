import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
  let history = useHistory();
  let toastify = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  let [values, setValues] = useState({
    email: "",
    otp: "",
    newPass: "",
  });
  let { email, otp, newPass } = values;

  //handleChange:

  let handleChange = (name) => (event) => {
    event.preventDefault();
    let value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  let getOtp = async () => {
    try {
      let newData = {
        email,
      };

      // let response = await fetch("http://localhost:5000/email-send", {
      let response = await fetch("https://user-registration-and-login.vercel.app/email-send", {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "content-type": "application/json",
        },
      });
      let data = await response.json();
      if (data) {
        toast.success("OTP successfully send to your Email");
      } else {
        toast.error("Error found while sending the OTP");
      }
      console.log(data);
    } catch (error) {
      toast.error("Error found while sending the OTP");

      console.log(error);
    }
  };

  let changePassword = async () => {
    try {
      let newData = {
        email,
        otp,
        newPass,
      };
      // let response = await fetch("http://localhost:5000/change-password", {
      let response = await fetch("https://user-registration-and-login.vercel.app/change-password", {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "content-type": "application/json",
        },
      });
      let data = await response.json(); // add await here
      console.log(data);
      if (data) {
        toast.success("Your new Password has been changed Successfully");
        setValues({ ...values, email: "", otp: "", newPass: "" });
      } else {
        toast.error("Error found while Changing Password");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error found while Changing Password");
    }
  };
  
  return (
    <div className="bg-white w-screen h-screen ">
      <div className=" font-bold font-bassy text-3xl text-center mt-6 ">
        FoodyVille
      </div>
      <div className="font-bold  text-3xl text-center mt-1 ">
        ForgotPassword
      </div>

      <div className=" text-center m-10 py-[100px] rounded-lg bg-red-200 text-black border-solid border-2 border-sky-500">
        <label>Email:</label>
        <input
          onChange={handleChange("email")}
          value={email}
          type="email"
          className=" ml-5"
          placeholder="Email"
        />{" "}
        <br />
        <label>OTP:</label>
        <input
          type="password"
          onChange={handleChange("otp")}
          value={otp}
          className=" ml-5 mt-5"
          placeholder="OTP"
        />
        <br />
        <button
          onClick={getOtp}
          className="bg-black text-yellow-300 rounded-md block hover:bg-slate-600 hover:text-yellow-100 mt-4 mx-auto"
        >
          Request OTP
        </button>
        <label>New Password:</label>
        <input
          onChange={handleChange("newPass")}
          value={newPass}
          type="password"
          className=" ml-5 mt-5"
          placeholder="New Password"
        />
        <button
          onClick={changePassword}
          className="bg-black text-yellow-300 rounded-md block hover:bg-slate-600 hover:text-yellow-100 mt-4 mx-auto"
        >
          Change Password
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ForgotPassword;
