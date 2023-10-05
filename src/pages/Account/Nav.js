import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useNav from "./hooks/useNav";
import { logoutUser } from "../Auth/auth/AuthActions";
import Button from "../../components/Button/Button";

const Nav = () => {
  const { setShowNav, showNav, dispatch, navigate } = useNav();
  return (
    <>
      <NavStyle>
        <svg
          viewBox="0 0 100 80"
          width="40"
          height="40"
          style={{
            cursor: "pointer",
            position: "relative",
            marginInlineStart: `${showNav ? "190px" : "0"}`,
          }}
          onClick={() => setShowNav(!showNav)}
        >
          <rect width="100" height="20" fill="#fff"></rect>
          <rect y="30" width="100" height="20" fill="#fff"></rect>
          <rect y="60" width="100" height="20" fill="#fff"></rect>
        </svg>
        <Link to="create-ads" style={{ display: "flex", alignItems: "center" }}>
          Post Ads
        </Link>
      </NavStyle>
      <SideNav showNav={showNav}>
        <Button
          style={{
            width: "150px",
            marginInline: "auto",
            display: "flex",
            justifyContent: "space-evenly",
          }}
          onClick={() => {
            setShowNav(!showNav);
            navigate("create-ads");
          }}
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
        <SideNavUl>
          <SideNavLi>
            <Link to="/">Home</Link>
          </SideNavLi>
          <SideNavLi>
            <Link to="buy-credit">Buy Credit</Link>
          </SideNavLi>
          <SideNavLi>
            <Link to="/change/password">Change Password</Link>
          </SideNavLi>
          <SideNavLi>
            <div
              style={{ color: "tomato", cursor: "pointer" }}
              onClick={() =>
                dispatch(logoutUser({}))
                  .unwrap()
                  .then(() => navigate("/"))
              }
            >
              Logout
            </div>
          </SideNavLi>
        </SideNavUl>
      </SideNav>
    </>
  );
};

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 15px;
  height: 40px;
  background-color: black;
  color: #fff;
  position: relative;
`;

const SideNav = styled.div`
  display: ${({ showNav }) => (showNav ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid grey;
  z-index: 2;
`;

const SideNavUl = styled.ul`
  padding: 0;
  margin-block: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SideNavLi = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  height: 40px;
  padding-block: auto;
  padding-inline-start: 30px;
  justify-self: center;
  background-color: aliceblue;
  border-bottom: 1px solid grey;
`;

export default Nav;
