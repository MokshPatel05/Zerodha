import React from "react";

function Awards() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 p-5">
          <img src="./public/Media/Images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>largest stcok broker in India</h1>
          <p className="mb-5">
            2+ million zerodha clients contribute to over 15% of all retail
            order volume in india dialy by trading and investing:{" "}
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Future & Option</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct Mutual Funds</li>
                <li>Bonds & Govt. securities</li>
              </ul>
            </div>
          </div>
          <img src="./public/Media/Images/pressLogos.png" alt="" style={{width:'90%'}} className="mt-5"/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
