import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar(prop) {
  const maleProfileImg =
    "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg";
  const femaleProfileURL =
    "https://thumbs.dreamstime.com/b/female-avatar-profile-icon-round-woman-face-flat-vector-illustration-female-avatar-profile-icon-round-woman-face-102767911.jpg";
  const navigate = useNavigate();
  let [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  const logout = () => {
    localStorage.setItem("isLogin", false);
    localStorage.removeItem("email");
    localStorage.removeItem("pwd");
    setIsLogin(false);
    navigate("/login");
  };

 
  const fetchUser = async (email) => {
    // console.log(email)
    await axios
      .post("http://localhost:8080/username", { email })
      .then((result) => {
        setUser({ ...result.data.user });
        console.log(`Welcome ${result.data.user.name}`);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("isLogin") == "true") {
      fetchUser(localStorage.getItem("email"));
      setIsLogin(true);
    } else {
      setIsLogin(false);
      console.log("Please Login!");
    }
  }, [localStorage.getItem("isLogin")]);

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg ">
        <div className="flex-1">
          <Link
            to={"/"}
            className="btn  rounded  font-bold hover:cursor-pointer ml-2 text-xl"
          >
            MySchool
          </Link>
        </div>
        <div className="flex-none gap-2">
          {isLogin ? (
            <>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="USN"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {/* alt="Tailwind CSS Navbar component" */}
                    {user.gender == "male" ? (
                      <img src={maleProfileImg} alt="" />
                    ) : (
                      <img src={femaleProfileURL} alt="" />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to={"/profile"} className="justify-between">
                      Profile
                      {/* <span className="badge">New</span> */}
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={() => logout()}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                {" "}
                <button className="btn bg-blue-200 border-2">Login</button>{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
