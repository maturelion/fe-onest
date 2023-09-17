import React from "react";
import CityList from "../CityList/CityList";
import { GeoUnit, StateListName, StateListStyle } from "./StateList.styled";

const StateList = ({countryData}) => {

  return (
    <StateListStyle>
      
          {countryData.states.map((state, stateIndex) => (
            <GeoUnit key={stateIndex}>
              <StateListName>{state.name}</StateListName>
              <CityList
                cities={state.cities}
                state={state.name}
                country={countryData.country_name}
              />
            </GeoUnit>
          ))}
    </StateListStyle>
  );
};

export default StateList;
