import React, { useEffect, useState } from "react";
import { AccountStyle, AccountStyleTable } from "./Account.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUserClassifieds } from "../../feature/classified/ClassifiedActions";
import Button from "../../components/Button/Button";
import { getWallet } from "../../feature/wallet/WalletActions";
import { Link } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { userClassifieds } = useSelector((state) => state.userClassified);
  const { wallet } = useSelector((state) => state.wallet);

  const dataPerPage = 33;
  const [nextPage, setNextPage] = useState(dataPerPage);

  useEffect(() => {
    dispatch(getUserClassifieds({ user }));
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(getWallet({ user }));
  }, [dispatch, user]);

  return (
    <AccountStyle>
      User ID:{" "}
      <span style={{ color: "#05BE71" }}>{user.id?.split("-")[0]}</span> | Total
      ads: <span style={{ color: "#05BE71" }}>{userClassifieds.length}</span> |
      Balance: <span style={{ color: "#05BE71" }}>{wallet.balance}</span> |{" "}
      <Link to="/buy-credits">Buy credits</Link> |{" "}
      <Link to="/expenses">Expenses records</Link>
      <div style={{ overflowX: "scroll" }}>
        <AccountStyleTable>
          <thead>
            <tr>
              <th>Ad Title</th>
              <th>Top</th>
              <th>Location</th>
              <th>Status</th>
              <th>Views</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userClassifieds
              .slice(nextPage - dataPerPage, nextPage)
              .map((userClassified, index) => (
                <tr key={index}>
                  <td>{userClassified.title}</td>
                  <td>{userClassified.is_hot}</td>
                  <td>
                    {userClassified.city_set.name},{" "}
                    {userClassified.city_set.state_name}
                  </td>
                  <td>Status</td>
                  <td>{userClassified.views}</td>
                  <td>Action</td>
                </tr>
              ))}
          </tbody>
        </AccountStyleTable>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{ width: "80px", height: "40px" }}
          disabled={!userClassifieds.length || nextPage === dataPerPage}
          onClick={() => setNextPage((nextPage) => (nextPage -= dataPerPage))}
        >
          Previous
        </Button>
        <div style={{ marginInline: "20px" }}>
          Page{" "}
          {Math.ceil(userClassifieds.length / dataPerPage) === 0
            ? 0
            : Math.ceil(nextPage / dataPerPage)}{" "}
          of {Math.ceil(userClassifieds.length / dataPerPage)}
        </div>
        <Button
          style={{ width: "80px", height: "40px" }}
          disabled={
            !userClassifieds.length || nextPage >= userClassifieds.length
          }
          onClick={() => setNextPage((nextPage) => (nextPage += dataPerPage))}
        >
          Next
        </Button>
      </div>
    </AccountStyle>
  );
};

export default Account;
