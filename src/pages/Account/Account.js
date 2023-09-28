import React from "react";
import { AccountStyle } from "./Account.styled";

const Account = () => {
  return (
    <AccountStyle>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Top</th>
            <th>Location</th>
            <th>Status</th>
            <th>Views</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {<tr>
            <td>Title</td>
            <td>Top</td>
            <td>Location</td>
            <td>Status</td>
            <td>Views</td>
            <td>Action</td>
          </tr>}
        </tbody>
      </table>
    </AccountStyle>
  );
};

export default Account;
