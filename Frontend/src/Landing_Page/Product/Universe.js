import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mb-5">
        <p className="p-5 fs-5">
          Want to know more about our technology stack? Check out the
          <a href="" style={{ textDecoration: "none", fontWeight: "400" }}>
            {" "}
            Zerodha.tech{" "}
          </a>
          blog.
        </p>
        <br />
        <br />
        <h2>The Zerodha Universe</h2>
        <br />
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 text-muted">
          <img
            src="/Media/Images/smallcaseLogo.png"
            style={{ width: "15rem", margin: "3rem 0 2rem 0" }}
          />
          <p className="fs-6">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 text-muted">
          <img
            src="/Media/Images/streakLogo.png"
            style={{ width: "12rem", margin: "3rem 0 2rem 0" }}
          />
          <p className="fs-6">
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 text-muted">
          <img
            src="/Media/Images/sensibullLogo.svg"
            style={{ width: "13rem", margin: "4rem 0 2.5rem 0" }}
          />
          <p>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 text-muted">
          <img
            src="/Media/Images/zerodhaFundhouse.png"
            style={{ width: "15rem", margin: "3rem 0 2rem 0" }}
          />
          <p className="fs-6">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 text-muted">
          <img
            src="/Media/Images/goldenpiLogo.png"
            style={{ width: "12rem", margin: "3rem 0 2.7rem 0" }}
          />
          <p className="fs-6">
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 text-muted">
          <img
            src="/Media/Images/dittoLogo.png"
            style={{ width: "9rem", margin: "3rem 0 2.5rem 0" }}
          />
          <p>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
