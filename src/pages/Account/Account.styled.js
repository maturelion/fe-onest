import styled from "styled-components";

export const AccountStyle = styled.div`
  margin-inline: 20px;
  margin-top: 20px;
`;

export const AccountStyleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 50px auto;

  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #eee;
  }

  th {
    background: #05BE71;
    color: white;
    font-weight: bold;
  }

  td,
  th {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
    font-size: 18px;
  }
`;
