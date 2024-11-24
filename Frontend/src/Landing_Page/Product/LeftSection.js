import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container   ">
        <div className="row mt-5" style={{paddingLeft:'6rem'}}>
            <div className="col-6 p-5">
                <img src={imageURL}/>
            </div>
            <div className="col-6 mt-5" style={{padding:'4rem 0 0 10rem'}}>
                <h1 style={{margin:'0 0 2rem 0'}}>{productName}</h1>
                <p style={{padding:'0 7rem 0 0', lineHeight:'1.9rem', fontFamily:'sans-serif'}}>{productDescription}</p>
                <div className="mt-3">
                <a href={tryDemo}>Try Demo &nbsp;→</a>
                <a href={learnMore} style={{marginLeft:'1rem'}}>Learn More&nbsp; →</a>
                </div>
                <div className="mt-3">
                <a href={googlePlay}><img src="Media/Images/googlePlayBadge.svg"/></a>
                <a href={appStore} style={{marginLeft:'1rem'}}><img src="Media/Images/appstoreBadge.svg"/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
