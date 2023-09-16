import React from "react";
import StateList from "../../components/StateList/StateList";
import { HomeStyle } from "./Home.styled";

const Home = () => {
  return (
    <HomeStyle>
      <h2 style={{backgroundColor: "black", color: "white", padding: "5px 10px"}}>United State</h2>
      <StateList />
    </HomeStyle>
  );
};

export default Home;
