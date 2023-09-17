import React, { useState } from "react";
import jsonData from "../../locationData.json";
import { CountryH2, CountryListStyle } from "./CountryList.styled";
import StateList from "../StateList/StateList";

const CountryList = () => {
  const [locationDatas] = useState(jsonData);
  return (
    <CountryListStyle>
      {locationDatas.map((locationData, countryIndex) => (
        <React.Fragment key={countryIndex}>
          <CountryH2 key={countryIndex}>{locationData.country.name}</CountryH2>
          <StateList locationData={locationData} />
        </React.Fragment>
      ))}
    </CountryListStyle>
  );
};

export default CountryList;
