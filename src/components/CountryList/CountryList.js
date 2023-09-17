import React, { useState } from "react";
import jsonData from "../../statesData.json";
import { CountryH2, CountryListStyle } from "./CountryList.styled";
import StateList from "../StateList/StateList";

const CountryList = () => {
  const [locationData] = useState(jsonData);
  return (
    <CountryListStyle>
      {locationData.map((countryData, countryIndex) => (
        <>
          <CountryH2 key={countryIndex}>{countryData.country_name}</CountryH2>
          <StateList countryData={countryData} />
        </>
      ))}
    </CountryListStyle>
  );
};

export default CountryList;
