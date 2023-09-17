import React from "react";
import slugify from "../../utils/slugify";
import { CityListUl, CityListli, CityListlink } from "./CityList.styled";

const CityList = ({ cities, state, country }) => {
  return (
    <CityListUl>
      {cities.map((city, index) => (
        <CityListli key={index}>
          <CityListlink
            to={`ads/${slugify(country)}/${slugify(state)}/${slugify(city)}`}
          >
            {city}
          </CityListlink>
        </CityListli>
      ))}
    </CityListUl>
  );
};

export default CityList;
