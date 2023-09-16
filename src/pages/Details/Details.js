import React, { useEffect } from "react";
import { DetailsStyle } from "./Details.styled";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const ad = location.state;

  useEffect(() => {
    document.title = ad.title;
  }, [ad.title]);

  return (
    <DetailsStyle>
      <h4>{ad.title}</h4>
      <div>{ad.description}</div>
    </DetailsStyle>
  );
};

export default Details;
