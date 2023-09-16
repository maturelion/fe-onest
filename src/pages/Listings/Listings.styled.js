import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListingsStyle = styled.div``;

export const AdListLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const AdListUl = styled.ul`
  padding: 0px 20px;
`;

export const AdListLi = styled.li`
  list-style: none;
  margin-block: 10px;
`;

export const Blinker = styled.span`
    margin-inline-start: 20px;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;
