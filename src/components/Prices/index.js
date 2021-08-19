import React, { useEffect, useState, useCallback } from 'react'
import { getCryptos } from '@services/cryptoServices'
import CryptoCard from '../CryptoCard'
import { Reveal, Tween } from 'react-gsap'


import './style.css'
export default function Prices() {

    const [cryptos, setCryptos] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const callCryptos = useCallback(async () => {
        setLoading(true);
        const cryptoData = await getCryptos(currentPage);
        setCryptos(cryptoData);
        setLoading(false);
    }, [currentPage])


    function handleFilter(e) {
        setFilter(e.target.value.toLowerCase());
    }

    let cryptoFiltered = cryptos.filter(e => e.id.includes(filter));

    useEffect(() => {
        callCryptos();
    }, [callCryptos])


    return (
        <section id="prices">
            <Reveal>
                <Tween from={{y:'100px', opacity: 0}} to={{y:'0px', opacity: 1}} duration={1} ease="power3.out">
                    <h3>Market Prices</h3>
                </Tween>
            </Reveal>
            <article className="cryptos-container">
                <form className="cryptos-container__form">
                    <input type="text" onChange={handleFilter} placeholder="Search a cryptocurrency..." />
                </form>
                <table className="table-cryptos">
                    <thead className="table-cryptos__header">
                        <tr>
                            <th>
                                <h6>Name</h6>
                            </th>
                            <th>
                                <h6>Price</h6>
                            </th>
                            <th>
                                <h6>Change (24H)</h6>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoFiltered.map(e => {
                            return <CryptoCard isLoading={loading} cryptos={e} key={e.id} />
                        })}
                    </tbody>
                </table>

                <div className="cryptos-container__pages">
                    {currentPage === 1 ? '' : <button className="cryptos-container__pages--prev-button" onClick={() => setCurrentPage(currentPage - 1)}>Prev page</button>}
                    <p>Page {currentPage}</p>
                    <button className="cryptos-container__pages--next-button" onClick={() => setCurrentPage(currentPage + 1)}>Next page</button>
                </div>

            </article>
        </section>
    )
}
