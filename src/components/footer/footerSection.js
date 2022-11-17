import React from "react";
import './footerSection.scss';
import logo from '../../assets/images/logo/logo.png';
import instagram from '../../assets/images/contacts/instagramK.png';
import telegram from '../../assets/images/contacts/telegram.png';
import discord from '../../assets/images/contacts/discord.png';
import faceBook from '../../assets/images/contacts/facebook.png';
import linkedIn from '../../assets/images/contacts/linkedin.png';

function footerSection(){


    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__column">
                        <ul>
                            <li>ABOUT</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Community</li>
                            <li>Litepaper</li>
                        </ul>

                        <ul>
                            <li>FEATURES</li>
                            <li>Exchange</li>
                            <li>Liquidity</li>
                            <li>Farms</li>
                            <li>Launchpools</li>
                            <li>Fixed Staking</li>
                        </ul>

                        <ul>
                            <li>SERVICE</li>
                            <li>Referral</li>
                            <li>Space token</li>
                            <li>Audits</li>
                        </ul>
                    </div> 
                    
                    <div className="footer__info">
                        <div className="footer__info-token">
                            <div className="footer__info-token-tablet">
                                <div className="footer__info-token-tablet-wrapper">
                                    <div className="footer__info-token-tablet-img">
                                        <img src={logo} alt="logo"></img>
                                    </div>
                                    <div className="footer__info-token-tablet-text">
                                        <label className="footer__info-token-tablet-text-name">SPC</label>
                                        <label className="footer__info-token-tablet-text-price">$0.87</label>
                                    </div>
                                </div>
                                <div className="footer__info-token-tablet-btn">
                                    <button type="button">Buy SPC</button>
                                </div>
                            </div>

                            <div className="footer__info-token-data">
                                <ul className="footer__info-token-data-name">
                                    <li>Max supply:</li>
                                    <li>Total supply:</li>
                                    <li>Circulating supply:</li>
                                    <li>Total Burned:</li>
                                    <li>Market Cap:</li>
                                </ul>
                                <ul className="footer__info-token-data-statistics">
                                    <li>310 000 000</li>
                                    <li>112 991 776</li>
                                    <li>137 151 791</li>
                                    <li>13 937 190</li>
                                    <li>$79 468 941</li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer__info-social">
                            <div className="footer__info-social-title">
                                <h4>You can find me here</h4>
                            </div>
                            <div className="footer__info-social-network">
                                <img src={instagram} alt="instagram"></img>
                                <img src={telegram} alt="telegram"></img>
                                <img src={discord} alt="discord"></img>
                                <img src={faceBook} alt="faceBook"></img>
                                <img src={linkedIn} alt="linkedIn"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default footerSection;