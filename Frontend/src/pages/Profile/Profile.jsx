import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast, Spinner } from "@chakra-ui/react";
export default function Profile() {
  const toast = useToast();
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

  //ProfileImages
  const maleProfileImg =
    "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg";
  const femaleProfileURL =
    "https://thumbs.dreamstime.com/b/female-avatar-profile-icon-round-woman-face-flat-vector-illustration-female-avatar-profile-icon-round-woman-face-102767911.jpg";

  // navigation
  const navigate = useNavigate();

  let [user, setUser] = useState({});
  const [edit, setEdit] = useState(true);
  //Fetching User
  const fetchUser = async (email) => {
    await axios
      .post("http://localhost:8080/username", { email })
      .then((result) => {
        setUser({ ...result.data.user });
      });
  };

  useEffect(() => {
    fetchUser(localStorage.getItem("email"));
  }, [localStorage.getItem("isLogin")]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setUser({ ...user, name: e.target.value });
        break;
      case "mobileNumber":
        setUser({ ...user, mobileNumber: e.target.value });
        break;
      case "qualification":
        setUser({ ...user, qualification: e.target.value });
        break;
      case "address":
        setUser({ ...user, address: e.target.value });
        break;
      case "gender":
        setUser({ ...user, gender: e.target.value });
        break;
      default:
        break;
    }
  };

  // Updating User Details
  const updateDetails = async (user) => {
    // response.status=true;
    setResponse({ ...response, status: true });
    await axios.post("http://localhost:8080/updateuser", user).then(() => {
      runToast("Updated Successfully!", "success");
      setEdit(true);
      setResponse({ ...response, status: false });
      setTimeout(()=>{
        location.reload();
      },1000);
    });
  };

  return (
    <>
      <main className="min-w-[299px] h-[100vh]  bg-blue-100">
        <div className=" m-auto max-w-[1400px] flex flex-wrap gap-y-4 p-6">
          <div className="left-div min-w-[200px] m-auto">
            {user.gender == "male" ? (
              <img
                className="h-56 rounded-full m-auto select-none"
                src={maleProfileImg}
                alt="Profile Image"
              />
            ) : (
              <img
                className="h-56 rounded-full m-auto"
                src={femaleProfileURL}
                alt="profile Image"
              />
            )}
          </div>
          {edit ? (
            <>
              <div className="right-div m-auto min-w-[100px] relative ">
                <h1 className=" btn rounded-none border-slate-300 border-b-8 pt-4 block w-[100%] text-center overflow-auto max-w-72 ">
                  {" "}
                  {user.name}
                </h1>
                <h2 className=" btn rounded-none border-slate-300 border-b-8 pt-4 block w-[100%] text-center overflow-auto max-w-72 ">
                  {user.email}
                </h2>
                <h2 className=" btn rounded-none border-slate-300 border-b-8 pt-4 block w-[100%] text-center overflow-auto max-w-72 ">
                  {user.mobileNumber}
                </h2>
                <h2 className=" btn rounded-none border-slate-300 border-b-8 pt-4 block w-[100%] text-center overflow-auto max-w-72 ">
                  {user.qualification}
                </h2>
                <h2 className=" btn rounded-none border-slate-300 border-b-8 pt-4 block w-[100%] text-center overflow-auto max-w-72 ">
                  {user.gender}
                </h2>
                <h2 className=" btn rounded-none  py-4 block w-[100%] text-center max-w-72 h-max">
                  {user.address}
                </h2>
                {/* <h2 className="m-auto text-center">{user}</h2> */}
                <button
                  onClick={() => setEdit(false)}
                  className="btn mt-1  rounded-md absolute right-0 w-full"
                >
                  Edit{" "}
                  <img
                    className="h-4"
                    src="./src/assets/Images/edit.png"
                    alt=""
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="right-div m-auto min-w-[100px] relative ">
                <textarea
                  name="name"
                  onChange={handleChange}
                  className=" btn rounded-none border-slate-300 border-b-8 pt-4 block w-72 text-center"
                  value={user.name}
                ></textarea>

                <textarea
                  name="mobileNumber"
                  onChange={handleChange}
                  className=" btn rounded-none border-slate-300 border-b-8 pt-4 block w-[100%] text-center "
                  value={user.mobileNumber}
                ></textarea>
                <textarea
                  name="qualification"
                  onChange={handleChange}
                  className=" btn rounded-none border-slate-300 border-b-8 pt-4 block w-[100%] text-center "
                  value={user.qualification}
                ></textarea>
                <select
                  value={user.gender}
                  onChange={handleChange}
                  className="btn select select-bordered  rounded-none border-slate-300 border-b-8  block w-[100%] text-center"
                  name="gender"
                  id=""
                >
                  <option
                    onClick={() => setUser({ ...user, gender: "male" })}
                    value="male"
                    className="text-lg"
                  >
                    Male
                  </option>
                  <option
                    onClick={() => setUser({ ...user, gender: "female" })}
                    value="female"
                    className="text-lg"
                  >
                    Female
                  </option>
                </select>
                <textarea
                  name="address"
                  onChange={handleChange}
                  className="textarea btn rounded-none  py-4 block w-full text-center  h-max"
                  
                  value={user.address}
                ></textarea>
                {/* <h2 className="m-auto text-center">{user}</h2> */}
                <button
                  onClick={() => {
                    updateDetails(user);
                  }}
                  className="btn w-full mt-1 rounded-md absolute right-0"
                >
                  {response.status ? (
                    <>
                      Please wait
                      <Spinner size="sm" />
                    </>
                  ) : (
                    <>
                      <span>Update</span>
                      <img
                        className="h-4"
                        src="./src/assets/Images/updateTextICON.svg"
                        alt=""
                      />
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
