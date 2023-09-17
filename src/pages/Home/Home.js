import React from "react";
import { HomeStyle } from "./Home.styled";
import CountryList from "../../components/CountryList/CountryList";

const Home = () => {
  return (
    <HomeStyle>
      <CountryList />
    </HomeStyle>
  );
};

export default Home;
