import React from "react";

function Hero() {
  return (
    <div className="container mb-3">
      <div className="row p-5 text-center">
        <img
          src="./public/Media/Images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5" style={{color:'rgb(66, 66, 66)'}}>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary"
          style={{ margin: "0 auto", width: "15%", fontWeight:'500'}}>
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
