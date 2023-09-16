import React, { useState } from "react";
import CityList from "../CityList/CityList";
import jsonData from "../../statesData.json";
import { GeoUnit, StateListName, StateListStyle } from "./StateList.styled";

const StateList = () => {
  const [stateData] = useState(jsonData);

  return (
    <StateListStyle>
      {stateData.states.map((state, index) => (
        <GeoUnit key={index}>
          <StateListName>{state.name}</StateListName>
          <CityList cities={state.cities} state={state.name} />
        </GeoUnit>
      ))}
    </StateListStyle>
  );
};

export default StateList;
