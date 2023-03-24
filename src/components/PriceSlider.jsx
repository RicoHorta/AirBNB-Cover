
import React from 'react'
// CSS
import './css/PriceSlider.css'

export default function PriceSlider() {
    return (
        <div>
            <div className='slider'>
                <div className='progress'></div>
            </div>
            <div className='range-input'>
                <input id='rangeMin' type='range' />
                <input id='rangeMax' type='range' />
            </div>
        </div>
    )
}
