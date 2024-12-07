import React from 'react';

function Pricing() {
    return ( 
        <div className='container text-center mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-5'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and<br/> price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration:"none"}} href=''>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-6'>
                    <div className="row text-center">
                        <div className="col-6 border p-4">
                            <h1 className='mb-4'>₹0</h1>
                            <p>Free equity delivery and<br/>
                            direct mutual funds</p>
                        </div>
                        <div className="col-6 border p-4">
                            <h1 className='mb-4'>₹20</h1>
                            <p>Intraday & F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;