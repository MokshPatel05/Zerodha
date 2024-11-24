import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="fs-2 text-center text-muted">People</h1>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-6 para-space">
          <img
            src="Media/Images/PeoplePhoto.jpg"
            alt=""
            style={{
              width: "20rem",
              borderRadius: "100%",
              margin: "0 0 2rem 9rem",
            }}
          />
          <h4 className="text-center text-muted fs-3">Moksh Patel</h4>
          <h6 className="text-center text-muted">Creator, Web Developer</h6>
        </div>
        <div
          className="col-6 para-space text-muted"
          style={{ padding: "1.6rem 5rem 0 0", fontWeight: "500" }}>
          <p>
            Moksh bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link to="/">Homepage</Link> /{" "}
            <Link
              to="https://www.linkedin.com/in/moksh-patel05/"
              target="_blank">
              Linked In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
