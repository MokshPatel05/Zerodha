import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center fs-5">
        <h1 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
          Charges
        </h1>
        <p className="text-muted">List of all charges and taxes</p>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-5">
          <img src="Media\Images\pricingEquity.svg" />
          <h1 className="fs-3 mb-5">Free equity delivery</h1>
          <p className="text-muted lh-lg">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="Media\Images\intradayTrades.svg" />
          <h1 className="fs-3 mb-5">Intraday and F&O trades</h1>
          <p className="text-muted lh-lg">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="Media\Images\pricingMF.svg" />
          <h1 className="fs-3 mb-5">Free direct MF</h1>
          <p className="text-muted lh-lg">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
