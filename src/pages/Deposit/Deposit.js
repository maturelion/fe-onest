import React, { useEffect } from "react";
import { DepositStyle } from "./Deposit.styled";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserClassifieds } from "../../feature/classified/ClassifiedActions";
import { getWallet } from "../../feature/wallet/WalletActions";
import { createDeposit, getDeposit } from "./services/DepositActions";
import QRCode from "react-qr-code";

const Deposit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { userClassifieds } = useSelector((state) => state.userClassified);
  const { wallet } = useSelector((state) => state.wallet);

  const deposit = JSON.parse(localStorage.getItem("deposit"));

  useEffect(() => {
    dispatch(getUserClassifieds({ user }));
    dispatch(getWallet({ user }));
  }, [dispatch, user]);

  useEffect(() => {
    if (user && localStorage.getItem("deposit") === null) {
      dispatch(createDeposit({ user }))
        .unwrap()
        .then((res) => {
          localStorage.setItem("deposit", JSON.stringify(res));
          window.location.reload();
        });
    }
  }, [dispatch, user]);

  useEffect(() => {
    setInterval(function () {
      dispatch(getDeposit({ deposit }))
        .unwrap()
        .then((res) => {
          localStorage.setItem("deposit", JSON.stringify(res));
          window.location.reload();
        });
    }, 1000 * 10);
  }, [deposit, dispatch]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("deposit"))?.status === "SUCCESSFUL") {
      navigate("/account");
      localStorage.removeItem("deposit");
    }
  }, [navigate]);

  return (
    <DepositStyle>
      User ID:{" "}
      <span style={{ color: "#047445" }}>{user.id?.split("-")[0]}</span> | Total
      ads: <span style={{ color: "#047445" }}>{userClassifieds.length}</span> |
      Balance: <span style={{ color: "#047445" }}>{wallet.balance}</span> |{" "}
      <Link to="/buy-credits">Buy credits</Link> |{" "}
      <Link to="/expenses">Expenses records</Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBlock: "50px 10px", textAlign: "center" }}>
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 220 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_108_3)">
                <path
                  d="M220 110C220 131.756 213.549 153.023 201.462 171.113C189.375 189.202 172.195 203.301 152.095 211.627C131.995 219.952 109.878 222.131 88.5401 217.886C67.2022 213.642 47.6021 203.166 32.2183 187.782C16.8345 172.398 6.35804 152.798 2.11367 131.46C-2.13071 110.122 0.0476608 88.0047 8.3733 67.9048C16.6989 47.805 30.7979 30.6253 48.8873 18.5383C66.9767 6.45139 88.2441 0 110 0C139.174 0 167.153 11.5893 187.782 32.2183C208.411 52.8473 220 80.8262 220 110Z"
                  fill="#F7931A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M78.1801 50.2304L103.46 57.0004L109.11 35.9404L121.75 39.3704L116.32 59.5604L126.63 62.3304L132.07 41.9204L144.93 45.3604L139.39 65.8804C139.39 65.8804 160.39 70.5304 165.33 87.6104C170.27 104.69 154.47 113.66 149.59 114C149.59 114 167.99 124.09 161.67 143.94C155.35 163.79 135.95 167.34 115.54 162.79L110 184.07L97.1401 180.63L102.79 159.68L92.5901 156.9L86.9401 178L74.1801 174.57L79.8401 153.57L53.8901 146.57L60.4301 132.05C60.4301 132.05 67.7501 134.05 70.5201 134.71C73.2901 135.37 75.0701 132.49 75.8501 129.61C76.6301 126.73 88.3801 79.0004 89.4901 75.0704C90.6001 71.1404 90.1501 68.0704 85.4901 66.8604C80.8301 65.6504 74.4901 63.7604 74.4901 63.7604L78.1801 50.2304ZM103.68 113.44L96.6801 141.27C96.6801 141.27 131.39 153.8 135.83 136.17C140.27 118.54 103.68 113.44 103.68 113.44ZM106.9 100.24L113.77 74.7404C113.77 74.7404 143.49 80.0604 139.83 94.2504C136.17 108.44 118.65 103 106.9 100.24Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_108_3">
                  <rect width="220" height="220" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <QRCode
            value={deposit?.address_used || ""}
            title={deposit?.address_used || ""}
            fgColor="#047445"
            level="H"
          />
        </div>
        <div>
          <div>{deposit?.address_used}</div>
          <div>status: {deposit?.status}</div>
          <div>hash: {deposit?.tx_hash}</div>
        </div>
      </div>
    </DepositStyle>
  );
};

export default Deposit;
