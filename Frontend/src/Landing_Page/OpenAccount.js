import React from "react";

function OpenAccount() {
  return (
    <div className="container mb-3 oa-container text-center">
      <div className="row p-5 text-center">
        <h2 className="m-4" style={{ color: "rgb(66, 66, 66)" }}>
          Open a Zerodha account
        </h2>
        <p className="mb-4 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary"
          style={{ margin: "0 auto", width: "15%", fontWeight: "500", }}>
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
