import React, {useState} from "react";
import './contentSection.scss';
import itemOne from '../../assets/images/slider/img/1.png';
import itemTwo from '../../assets/images/slider/img/2.png';
import itemThree from '../../assets/images/slider/img/3.png';
import itemFour from '../../assets/images/slider/img/4.jpg';
import arrowBack from '../../assets/images/slider/arrows/back.png';
import arrowNext from '../../assets/images/slider/arrows/next.png';


function ContentSection(){

    let [currentSlider, setCurrentSlider] = useState(0);

    let arrayItem = [
        {
            image: itemOne,
            text: 'The fall of bitcoin'
        },
        {
            image: itemTwo,
            text: 'Сrypto wallets'
        },
        {
            image: itemThree,
            text: 'Staking 10% APY'
        },
        {
            image: itemFour,
            text: 'Bitcoin 100k?'
        }
    ]

    let sliderItem = arrayItem.map((item, i) =>(
        <div className="content__slider-item"  key={i}>
            <img src={item.image} alt="item"></img>

            <div className="content__beforeBlock"></div>
            <div className="content__slider-text">
                <p>
                    { item.text }
                </p>
            </div>
        </div>
    ));

    return(

        <section className="content">
           <div className="container">
                <div className="content__title">
                    <h3>News in the world of "SPACE" and cryptocurrencies</h3>
                </div>
                <div className="content__slider">

                    <div className="content__slider-back">
                        <img src={arrowBack} alt="arrowBack"></img>
                    </div>

                        { sliderItem }

                    <div className="content__slider-next">
                        <img src={arrowNext} alt="arrowNext"></img>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
           </div>
        </section>

    )
}

export default ContentSection;