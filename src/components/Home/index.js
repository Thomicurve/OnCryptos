import React, { useEffect, useState } from 'react';
import { getOneCrypto } from '../../services/cryptoServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Tween } from 'react-gsap'

import './styles.css'

export default function Home() {
    const [cryptoCurrency, setCryptoCurrency] = useState({});
    const [loader, setLoader] = useState(false);

    async function GetPrice() {
        const result = await getOneCrypto();
        setCryptoCurrency(result);
        setLoader(true);
    }

    useEffect(() => {
        GetPrice();
    }, [])

    return (
        <main id="home">
            <Tween from={{ x: '-200px', opacity: 0 }} to={{ x: '0px', opacity: 1 }} duration={1} ease="power1.out">
                <div className="title-left">
                    <h2>CRYPTOCURRENCY PRICES PAGE</h2>
                    <h3>SEE ALL CRYPTOCURRENCIES PRICES IN ONE CLICK</h3>
                </div>
            </Tween>
                {loader ?
                    <div className="title-right">
                        <img className="title-right__image" src={cryptoCurrency.image} alt={cryptoCurrency.id} />

                        <div className='title-right__crypto-name'>
                            <h4>{cryptoCurrency.name}</h4>
                            <h5>{cryptoCurrency.currentPrice} USD</h5>
                        </div>

                        {cryptoCurrency.lastDayPrice < 0 ?
                            <div className="title-right__last-price last-price__down">
                                <h5>%{cryptoCurrency.lastDayPrice}</h5>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </div>
                            :
                            <div className="title-right__last-price last-price__up">
                                <h5>%{cryptoCurrency.lastDayPrice}</h5>
                                <FontAwesomeIcon icon={faCaretUp} />
                            </div>}
                    </div>


                    : <SkeletonTheme color="#013436" highlightColor="#43D993">
                        <div className="title-right">
                            <Skeleton className="title-right__image" style={{ borderRadius: 50 }} width={70} height={70} />
                            <Skeleton className="title-right__crypto-name" count={3} width={170} />
                        </div>
                    </SkeletonTheme>
                }
            <div className="circle-figure circle-figure--1"></div>
            <div className="circle-figure circle-figure--2"></div>
        </main>
    )
}
