import React from "react";

function Hero() {
  return (
    <section className="container-fluid pt-3 pb-3" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h3 className="fs-5">Support Portal</h3>
        <a href="#">Track Tickets</a>
      </div>
      <div className="row p-5" style={{margin:"0 0 0 12rem"}}>
        <div className="col-6">
          <h3 className="mb-3">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input placeholder="Eg: How do i activate F&O, Why my order is getting rejected.." className="text-muted mb-3"/><br/>
          <a href="">Track account opening </a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins </a> <br/>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className="mb-3">
              <a href="">Latest Intraday leverages and Square-off timings</a>
            </li>
            <li>
              <a href="">Rights Entitlements listing in December 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;