import React from "react";

function NotFound() {
  return (
    <div className="container mb-3 oa-container text-center">
      <div className="row p-5 text-center">
        <h2 className="m-4" style={{ color: "rgb(66, 66, 66)" }}>
          404 : Page Not Found
        </h2>
        <p className="mb-4 text-muted m-4">
          Sorry! The page you are looking for is not exit.&nbsp;<i class="fa-solid fa-triangle-exclamation"></i>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
