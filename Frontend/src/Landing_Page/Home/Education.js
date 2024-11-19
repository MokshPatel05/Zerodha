import React from "react";

function Education() {
  return (
    <div className="container" style={{marginTop:'8rem'}}>
      <div className="row">
        <div className="col-6 text-center">
          <img src="./public/Media/Images/education.svg" alt="" style={{width:'26rem'}}/>
        </div>
        <div className="col-6">
          <h2 className="mb-3" style={{color:'rgb(66,66,66)'}}>Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world <br></br>
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }} >
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in <br/>
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
