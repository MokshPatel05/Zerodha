import React from "react";

function State() {
  return (
    <div className="container p-5 stateCont">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2 className="mb-5">Trust with confidence</h2>
          <h3 className="fs-5">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India
          </p>
          <h3 className="fs-5">No spam or gimmicks</h3>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India
          </p>
          <h3 className="fs-5">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-5">Do better with money</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 py-5">
          <img
            src="/Media/Images/ecosystem.png"
            alt=""
            style={{ width: "100%" }}
          />
          <p className="text-center">
            <a href="" className="mx-5" style={{textDecoration:"none"}}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" style={{textDecoration:"none"}}>
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default State;
