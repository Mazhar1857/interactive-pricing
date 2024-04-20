import React, { useEffect, useRef, useState } from 'react';
import './pricing.css'

const Pricing = () => {
    const [btn, setBtn] = useState('month');
    const [views, setViews] = useState(0);
    const [price, setPrice] = useState()
    const handleBtn = () => {
        setBtn((pre) => {
            return pre === 'year' ? 'month' : 'year'
        })
    }

    const handleViews = (e) => {
        setViews(e.target.value)
    }
    let viewInPercent;

    const [viewInRoman, setViewInRoman] = useState();
    useEffect(() => {
        viewInPercent = ((views / 1000000) * 100)
        let viewInRoman;
        if (views <= 10000) {
            viewInRoman = '10k';
        } else if (views <= 50000) {
            viewInRoman = '50k';
        } else if (views <= 100000) {
            viewInRoman = '100k';
        } else if (views <= 500000) {
            viewInRoman = '500k';
        } else {
            viewInRoman = '1M';
        }
        setViewInRoman(viewInRoman);

        let price;
        switch (btn) {
            case 'month':
                if (views <= 10000) {
                    price = 8;
                } else if (views <= 50000) {
                    price = 12;
                } else if (views <= 100000) {
                    price = 16;
                } else if (views <= 500000) {
                    price = 24;
                } else {
                    price = 36;
                }
                break;
            case 'year':
                if (views <= 10000) {
                    price = 8 * 0.75;
                } else if (views <= 50000) {
                    price = 12 * 0.75;
                } else if (views <= 100000) {
                    price = 16 * 0.75;
                } else if (views <= 500000) {
                    price = 24 * 0.75;
                } else {
                    price = 36 * 0.75;
                }
                break;
        }
        setPrice(price.toFixed());

    }, [views, btn])



    return (
        <div className='pricing-component'>
            <div className='page-view-count'>{viewInRoman} PAGEVIEWS</div>
            <div className='pricing'><span>${price}</span><span>/ month</span></div>
            <div className='page-view-slider' style={{ '--views': `${viewInPercent}%` }}><input type="range" min={0} max={1000000} value={views} onChange={handleViews} /></div>
            <div className='month-year-toggle'>
                <div>Month Billing</div>
                <div className={`toggle-btn ${btn}`} onClick={handleBtn}><input type="checkbox" /></div>
                <div>Year Billing</div>
                <div className='discount'><span>-</span>25% <span>discount</span></div>
            </div>
            <div className='foot'>
                <ul className='foot-list'>
                    <li>Unlimited websites</li>
                    <li>100% data ownership</li>
                    <li>Email reports</li>
                </ul>
                <button className='foot-button'>Start my trial</button>
            </div>
        </div >
    )
}

export default Pricing
