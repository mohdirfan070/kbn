import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
export default function Attendance() {
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

  const navigate = useNavigate();
  const [branches, setBranches] = useState([
    {
      branchName: "Computer Science",
      branchLink: "/cse",
    },
    {
      branchName: "Mechanical",
      branchLink: "/mech",
    },
    {
      branchName: "Electrical",
      branchLink: "/ele",
    },
    {
      branchName: "Civil",
      branchLink: "/civil",
    },
    {
      branchName: "Electronics",
      branchLink: "/enc",
    },
  ]);

  // let arr = [1,2,3,4,5,6,7,8];
  let departments = [
    { link: "/", branchName: "CSE" },
    "ME",
    "CE",
    "ENC",
    "ELE",
  ];

  const checkLogin = () => {
    if (localStorage.getItem("isLogin") == "true") {
      return null;
    } else {
      runToast("Can't Proceed Further, Please Login!",'error');
      navigate("/login");
    }
  };
  useEffect(() => {
    checkLogin();
  }, [localStorage.getItem("isLogin")]);

  return (
    <>
      <div className="classCardList py-1 w-full h-[100vh] flex justify-center mt-6 ">
        <ul className="  inline-block flex-wrap justify-center  ">
          {branches.map((ele, i) => {
            return (
              <Link
                onClick={checkLogin}
                to={`/attendance${ele.branchLink}`}
                key={i}
              >
                {" "}
                <li className="m-1">
                  <span className=" btn m-1  h-20  min-w-[275px]  bg-primary-content text-xl">
                    {ele.branchName} ENG
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
