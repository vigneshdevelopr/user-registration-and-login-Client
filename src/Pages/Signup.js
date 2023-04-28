import React, { useState } from "react";
import Background from "../assets/signup.jpg";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const history = useHistory();
  const toastify = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { name, email, password, confirmpassword } = values;

  //handleChange

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const AddUser = async (event) => {
    event.preventDefault();
    try {
      const newData = {
        name,
        email,
        password,
        confirmpassword,
      };
      const response = await fetch("https://user-registration-and-login.vercel.app/register", {
      // const response = await fetch("http://localhost:5000/register",{
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      setValues({
        ...values,
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      if (response.status === 201) {
        toast.success(
          `Welcome ${values.name} to FoodyVille Family 🍔`,
          toastify
        );
      } else if (response.status === 409) {
        toast.error("Account Already Exists!", toastify);
      }

      console.log(values.name);

      //   alert(`Welcome ${values.name} to FoodyVille Family 🍔`);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("Account Created Successfully!", toastify);
      } else {
        toast.error("Server Error", toastify);
      }

      console.log(error);
    }
  };

  //handleSubmit:
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div>
      <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
          {/* <!-- Row --> */}
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* <!-- Col --> */}
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{ backgroundImage: `url(${Background})` }}
            ></div>
            {/* <!-- Col --> */}
            <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h2 class="text-3xl font-bassy font-semibold text-gray-700 text-center">
                FoodyVille
              </h2>
              <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
              <form
                onSubmit={handleSubmit}
                class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div class="mb-4">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Name
                    </label>
                    <input
                      onChange={handleChange("name")}
                      value={name}
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    onChange={handleChange("email")}
                    value={email}
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      onChange={handleChange("password")}
                      value={password}
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      onChange={handleChange("confirmpassword")}
                      value={confirmpassword}
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div class="mb-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={AddUser}
                  >
                    Register Account
                  </button>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div class="text-center cursor-pointer hover:bg-gray-400">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
