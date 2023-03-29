import React from 'react'

export default function Skeleton() {
    return (
        <div className='col-xs-6 col-sm-4 col-md-3 col-lg-15'>
            <div className='card border-0 mt-4 ms-3'>
                <div className='placeholder-glow'>
                    <p style={{ width: '100%', height: '280px' }} className='placeholder rounded-4'></p>
                </div>
                <h5 className='d-flex justify-content-between placeholder-glow'>
                    <span className='placeholder col-7'></span>
                    <span className='placeholder col-2'></span>
                </h5>
                <div className='placeholder-glow'>
                    <span className='placeholder col-6'></span>
                </div>
                <div className='placeholder-glow'>
                    <span className='placeholder col-4'></span>
                </div>
                <div className='placeholder-glow'>
                    <span className='placeholder col-4'></span>
                </div>
            </div>
        </div>
    )
}
