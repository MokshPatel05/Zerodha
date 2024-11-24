import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  linkName,
}) {
  return (
    <div className="container">
      <div className="row mt-5" style={{ paddingRight: "10rem" }}>
        <div className="col-6 mt-5" style={{ padding: "4rem 0 0 10rem" }}>
          <h1 style={{ margin: "0 0 2rem 0" }}>{productName}</h1>
          <p
            style={{
              padding: "0 7rem 0 0",
              lineHeight: "1.9rem",
              fontFamily: "sans-serif",
            }}>
            {productDescription}
          </p>
          <div className="mt-3">
            <a href={learnMore}>
              {linkName}&nbsp; →
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
