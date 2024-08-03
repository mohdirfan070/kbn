import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
export default function loginForm() {
  // Login Or SignUp
  let [isUser, setIsUser] = useState(false);
  // Navigate
  const navigate = useNavigate();
   if(localStorage.getItem("isLogin")=="true"){
      navigate('/');
    }
    //Toast
  const toast = useToast();
  //  const statuses = ['success', 'error', 'warning', 'info']
  function runToast(title, status) {
    toast({
      title,
      status,
       isClosable: true,
      position: "top-right",
      duration: 2500,
    });
  }

  let [response, setResponse] = useState({
    msg: "",
    status: false,
  });

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    gender: "male",
    address: "",
    qualification: "",
    password: "",
    loginEmail: "",
    loginPassword: "",
  });

  const handleChange = (e) => {
    toast.closeAll();
    setResponse({ ...response, status: false });
    switch (e.target.name) {
      case "name":
        setFormData({ ...formData, name: e.target.value });
        break;
      case "loginEmail":
        setFormData({ ...formData, loginEmail: e.target.value });
        break;
      case "loginPassword":
        setFormData({ ...formData, loginPassword: e.target.value });
        break;
      case "email":
        setFormData({ ...formData, email: e.target.value });
        break;
      case "password":
        setFormData({ ...formData, password: e.target.value });
        break;
      case "mobileNumber":
        setFormData({ ...formData, mobileNumber: e.target.value });
        break;
      case "qualification":
        setFormData({ ...formData, qualification: e.target.value });
        break;
      case "address":
        setFormData({ ...formData, address: e.target.value });
        break;
      case "gender":
        setFormData({ ...formData, gender: e.target.value });
        break;
      default:
        break;
    }
  };

  //reset inp values
  let reset = () => {
    setResponse({ ...response, status: false });
    toast.closeAll();
    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      gender: "male",
      address: "",
      qualification: "",
      password: "",
      loginEmail: "",
      loginPassword: "",
    });
  };

  const handleSubmit = async () => {
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.password == "" ||
      formData.address == "" ||
      formData.mobileNumber == "" ||
      formData.qualification == ""
    ) {
      runToast("Please fill all details!", "error");
      //  alert('Please fill all details!')
    } else {
      setResponse({ ...response, status: true });
      let result = await axios.post("https://kbnapiv1.onrender.com/signup", formData);
      // console.log(result.data.userData);
      if (result.data.user) {
        setResponse({ ...response, status: result.data.status });
        // alert(result.data.msg);
        runToast(result.data.msg, "error");
      } else {
        localStorage.setItem("isLogin",true);
        localStorage.setItem("email",result.data.userData.email);
        localStorage.setItem("pwd",result.data.userData.password);
        runToast("Account Created Successfull!", "success");
        setResponse({ ...response, status: result.data.status });
        navigate('/');
      }
    }
  };


  const handleLogin = async () => {
    if (
      formData.loginEmail=="" || formData.loginPassword==""
    ) {
      runToast("Please fill all details!", "error");
    } else {
      setResponse({ ...response, status: true });
      let result = await axios.post("https://kbnapiv1.onrender.com/login", formData);
      // console.log(result);
      if (result.data.user.status) {
        runToast("Login Successfull!", "success");
        setResponse({ ...response, status: result.data.status });
        localStorage.setItem("isLogin",true);
        localStorage.setItem('update',false);
        localStorage.setItem("email",result.data.user.userData.email);
        localStorage.setItem("pwd",result.data.user.userData.password);
         navigate('/');
      } else {
        setResponse({ ...response, status: result.data.status });
      
        runToast(result.data.user.msg, "error");
       
      }
    }
  };



  return (
    <>
      {/* <Navbar /> */}
      <div className="min-w-[299px] py-2 px-4 max-w-lg m-auto flex flex-col justify-start align-middle gap-y-4 relative">
        { (isUser) ? (
          <>
          <div id="signupform" className="h-max min-w-[199px] w-80 flex flex-col gap-y-3 m-auto absolute top[50%] left-[50%] translate-x-[-50%]">

            <h1 className="text-center font-semibold text-xl text-blue-600 ">
            Hey there, Register and get started.
            </h1>
            <label className="input input-bordered flex items-center gap-2 rounded">
              <input
                onChange={handleChange}
                type="text"
                className="grow"
                placeholder="Name"
                name="name"
                value={formData.name}
                />
            </label>
            <label className="input input-bordered flex items-center gap-2 rounded">
              <input
                onChange={handleChange}
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                value={formData.email}
                />
            </label>

            <label className="input input-bordered flex items-center gap-2 rounded">
              <input
                onChange={handleChange}
                type="password"
                className="grow"
                placeholder="Password"
                name="password"
                value={formData.password}
                />
            </label>
            <label className="input input-bordered flex items-center gap-2 rounded">
              <input
                onChange={handleChange}
                type="number "
                className="grow"
                placeholder="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                />
            </label>
            <select
              value={formData.gender}
              onChange={handleChange}
              className="select select-bordered rounded"
              name="gender"
              id=""
              >
              <option
                onClick={() => setFormData({ ...formData, gender: "male" })}
                value="male"
                className="text-lg"
                >
                Male
              </option>
              <option
                onClick={() => setFormData({ ...formData, gender: "female" })}
                value="female"
                className="text-lg"
                >
                Female
              </option>
            </select>
            <label className="input input-bordered flex items-center gap-2 rounded">
              <input
                onChange={handleChange}
                type="text"
                name="qualification"
                value={formData.qualification}
                className="grow"
                placeholder="Qualification"
                />
            </label>
            <label className="input input-bordered flex items-center gap-2 rounded">
              <input
                onChange={handleChange}
                type="text"
                className="grow"
                placeholder="Address"
                name="address"
                value={formData.address}
                />
            </label>
            <button
              onClick={() => setIsUser(false)}
              className="btn-link w-max m-auto"
              >
              Already a user?
            </button>
            <div className="btns flex justify-center">
              <button
                onClick={handleSubmit}
                className="btn btn-primary font- bold text-base rounded min-w-36"
                >
                {response.status ? (
                  <>
                    Please wait
                    <Spinner size="sm" />
                  </>
                ) : (
                  " Sign Up"
                )}
              </button>
              <button
                onClick={() => reset()}
                className="btn bg-slate-300 rounded ml-1"
                >
                Reset
              </button>
            </div>
                </div>
          </>
        ) : (
          <>
          <div className="h-max min-w-[199px] w-72 flex flex-col gap-y-3 m-auto absolute top[50%] left-[50%] translate-x-[-50%] translate-y-[50%]">

            <h1 className="text-center font-semibold text-xl text-blue-600  ">
            Welcome back. <br /> Please enter your details.
            </h1>
            <label className="input input-bordered flex items-center gap-2 rounded">
              <input
                onChange={handleChange}
                type="text"
                className="grow"
                placeholder="Email"
                name="loginEmail"
                value={formData.loginEmail}
                />
            </label>

            <label className="input input-bordered flex items-center gap-2 rounded">
              <input
                onChange={handleChange}
                type="password"
                className="grow"
                placeholder="Password"
                name="loginPassword"
                value={formData.loginPassword}
                />
            </label>
            <button
              onClick={() =>{setIsUser(true)}}
              className="btn-link w-max m-auto"
              >
              new user?
            </button>
            <div className="btns flex justify-center">
              <button
                onClick={handleLogin}
                className="btn btn-primary font- bold text-base rounded min-w-36"
                >
                {response.status ? (
                  <>
                    Please wait
                    <Spinner size="sm" />
                  </>
                ) : (
                  "Login"
                )}
              </button>
              <button
                onClick={() => reset()}
                className="btn bg-slate-300 rounded ml-1"
                >
                Reset
              </button>
            </div>
                </div>
          </>
        )}
      </div>
    </>
  );
}
