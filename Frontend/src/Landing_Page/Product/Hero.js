import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='row text-center' style={{fontWeight:'500', fontFamily:'sans-serif', margin:'3rem 0 6rem 0'}}>
                <h1>Zerodha Products</h1>
                <h4 className='text-muted p-3' style={{fontFamily:'sans-serif'}}>Sleek, modern, and intuitive trading platforms</h4>
                <p className='text-muted'>Check out our  <a href="" style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
        </div>
     );
}

export default Hero;
