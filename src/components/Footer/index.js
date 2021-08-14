import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';
export default function Footer() {
    return (
        <footer id="about" className="about-container">
            <div className="about-container__information">
                <div className="about-container__left-side">
                    <h1>OnCryptos®</h1>
                </div>
                <div className="about-container__right-side">
                    <ul>
                        <li><span><FontAwesomeIcon icon={faEnvelope} /></span> curvelothomas08@gmail.com</li>
                        <li><a href="https://github.com/Thomicurve" rel="noreferrer" target="_blank"><span><i class="fab fa-github"></i></span> Thomicurve</a></li>
                        <li><a href="https://www.linkedin.com/in/thomas-curvelo-a534911ba/" rel="noreferrer" target="_blank"><span><i class="fab fa-linkedin"></i></span> Thomas Curvelo</a></li>
                    </ul>
                </div>
            </div>
            <div class="about-container__ssl">
                <a href="//www.dmca.com/Protection/Status.aspx?ID=86687a87-99ce-4253-82e8-123609611fd7" title="DMCA.com Protection Status" class="dmca-badge"> <img src="https://images.dmca.com/Badges/DMCA_badge_trn_60w.png?ID=86687a87-99ce-4253-82e8-123609611fd7" alt="DMCA.com Protection Status" /></a>
                <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
            </div>
        </footer>
    )
}