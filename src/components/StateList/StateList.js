import React from "react";
import CityList from "../CityList/CityList";
import { GeoUnit, StateListName, StateListStyle } from "./StateList.styled";

const StateList = ({locationData}) => {

  return (
    <StateListStyle>
      
          {locationData.states.map((state, stateIndex) => (
            <GeoUnit key={stateIndex}>
              <StateListName>{state.name}</StateListName>
              <CityList
                cities={state.cities}
                state={state.name}
                country={locationData.country.name}
              />
            </GeoUnit>
          ))}
    </StateListStyle>
  );
};

export default StateList;
