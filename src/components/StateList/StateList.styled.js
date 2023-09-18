import styled from "styled-components";

export const StateListStyle = styled.div`
  display: block;
  column-count: 2;
  font-size: 14px;
  text-align: left;
  
  @media only screen and (min-width: 425px) {
    column-count: 3;
  }
`;

export const StateListName = styled.h2`
  color: tomato;
  line-height: 0px;
`;

export const GeoUnit = styled.div`
  page-break-inside: avoid;
`;
