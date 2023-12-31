import React, { useEffect, useState } from "react";
import { NavigationStyle } from "./Navigation.styled";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Navigation = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("token") !== null);
  }, []);

  return (
    <NavigationStyle>
      <div>
        <NavLink to="/">Onest</NavLink>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "max-content",
        }}
      >
        {isLoggedIn ? (
          <>
            <div style={{ display: "flex", marginInlineEnd: "10px" }}>
              <NavLink style={{ marginInlineEnd: "5px" }} to={"/account"}>
                Account
              </NavLink>
            </div>
            <Button
              style={{
                width: "150px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
              onClick={() => navigate("create-ads")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-miterlimit="10"
                />
                <path
                  d="M8.25 12H15.75"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 8.25V15.75"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Post Ads
            </Button>
          </>
        ) : (
          <div style={{ display: "flex", marginInlineEnd: "10px" }}>
            <NavLink style={{ marginInlineEnd: "5px" }} to={"/auth/login"}>
              Login
            </NavLink>{" "}
            /
            <NavLink style={{ marginInlineStart: "5px" }} to={"/auth/register"}>
              Register
            </NavLink>
          </div>
        )}
      </div>
    </NavigationStyle>
  );
};

export default Navigation;
