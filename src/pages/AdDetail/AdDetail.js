import React, { useEffect } from "react";
import { AdDetailStyle } from "./AdDetail.styled";
import { useLocation } from "react-router-dom";

const AdDetail = () => {
  const location = useLocation();
  const ad = location.state;

  useEffect(() => {
    document.title = ad.title;
  }, [ad.title]);

  return (
    <AdDetailStyle>
      <h4>{ad.title}</h4>
      <div>{ad.description}</div>
    </AdDetailStyle>
  );
};

export default AdDetail;
