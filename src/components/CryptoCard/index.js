import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import Loader from "react-loader-spinner";

import './styles.css'
export default function CryptoCard({ cryptos, isLoading }) {
    return (
        <tr className="cryptos-container__card">
            {!isLoading ?
                <React.Fragment>
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
                </React.Fragment>
                :
                <React.Fragment>
                    <td className="card__indentity">
                        <Loader className="card__image" type="ThreeDots" color="#00BFFF" height={30} width={30} />
                    </td>
                    <td className="card__price">
                        <Loader type="ThreeDots" color="#00BFFF" height={30} width={30} />
                    </td>
                    <td className="card__perc last-price__up">
                        <Loader type="ThreeDots" color="#00BFFF" height={30} width={30} />
                    </td>
                </React.Fragment>
            }

        </tr>

    )
}
