import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
export default function CryptoCard({ cryptos }) {
    return (
        <tr className="cryptos-container__card">
            <td className="card__indentity">
                <img className="card__image" src={cryptos.image} alt={cryptos.id} />
                <p className="card__name">{cryptos.name} <span>{cryptos.symbol}</span> </p>
            </td>
            <td className="card__price">${cryptos.current_price} USD</td>
            {cryptos.price_change_percentage_24h < 0 ?
                <td className="card__perc last-price__down">
                    %{cryptos.price_change_percentage_24h.toFixed(2)}
                    <FontAwesomeIcon icon={faCaretDown} />
                </td> :
                <td className="card__perc last-price__up">
                    %{cryptos.price_change_percentage_24h.toFixed(2)}
                    <FontAwesomeIcon icon={faCaretUp} />
                </td>}
        </tr>

    )
}
