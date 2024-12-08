import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-5">
          <a href="#" style={{textDecoration:"none"}}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul className="text-muted" style={{textAlign:"left", fontSize:"1rem"}}>
            <li>Zerodha is India's largest stock brokerage platform, offering a commission-free model for equity investments.</li>
            <li>It provides a user-friendly interface for trading and investing in stocks, commodities, and mutual funds.</li>
            <li>Zerodha introduced the "discount brokerage" model, revolutionizing how Indians approach trading.</li>
            <li>Its flagship trading platform, Kite, is known for its minimalistic design and advanced charting tools.</li>
            <li>Zerodha supports learning through its education initiative, Varsity, which offers free modules on financial markets.</li>
            <li>With over 10 million users, Zerodha processes millions of daily transactions, making it a market leader.</li>
          </ul>
        </div>
        <div className="col-4 p-5">
          <a href="#" style={{textDecoration:"none"}}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
