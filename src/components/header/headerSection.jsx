import React, {useRef, useEffect} from 'react';
import './headerSection.scss';
import Particles from 'react-tsparticles';
import Parallax from 'parallax-js';
import { loadFull } from 'tsparticles';
import logo from '../../assets/images/logo/logo.png';
import moon from '../../assets/images/header/moon.png'
import cometOne from '../../assets/images/header/comet-first.png';
import cometTwo from '../../assets/images/header/comet-second.png';
import earth from '../../assets/images/header/earth.png';
import astronaut from '../../assets/images/header/astronaut.png';
import Auth from './header__auth/authSection';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { activeControlAuth } from '../../store/authUserSlice';


function HeaderSection(){

    const particlesInit = async (main) =>{
        await loadFull(main)
    }

    const particlesLoaded = (container) => {
    }

    // Parallax

    const headerEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(headerEl.current)
        return () => parallaxInstance.disable();
    }, [])

    window.onload = function(){

        let astronaut = document.querySelector('.header__astronaut-img');

        setTimeout(() =>{
            astronaut.style.right = '110%'

            setInterval(() =>{
                astronaut.style.bottom = '600px'
            }, 2000)
        }, 2000)

    }

    let authUser = useSelector( state => state.auth.controlAuth);
    const dispatch = useDispatch();
    const showAuthUser = () => dispatch(activeControlAuth(true))

    return(
        <header className='header'>
            <div className='container'>
                <div className='header__wrapper'>
                    <div className='header__logo'>
                        <div className='header__logo-img'><img src={logo} alt="logo"></img></div>
                        <div className='header__logo-text'>
                            <p>
                                Space
                                <br />
                                Opportunity
                            </p>
                        </div>
                    </div>
                    
                    <div className='header__navigation'>
                        <ul>
                            <li>Home</li>
                            <li>Swap</li>
                            <li>Our Project</li>
                            <li onClick={showAuthUser}>Sign up</li>
                        </ul>
                    </div>
                </div>


                <div className="header__introduction">
                    <div className="header__introduction-title">
                        <h3>Reimagine your world</h3>

                        <p className='header__introduction-autor'>Powered by <a href="https://www.instagram.com/d78_voluychik/">@d78_voluychik</a></p>

                        <p className='header__introduction-text'>Through simple, secure, and scalable technology, 
                           SPACE empowers millions to invent and explore new experiences. 
                           Business, creativity, and community are being reimagined for a more sustainable and inclusive future</p>
                    </div>
                    <div className="header__introduction-btn">
                        <button type="button">Buy cryptocurrency</button>
                        <button type="button">Learn more</button>
                    </div>
                </div>
            </div>

            {authUser === true && <Auth></Auth>}

            <div ref={headerEl} className='header__parallax'>
                <ul data-depth="0.1" className='header__space-item'>
                    <li><img src={moon} alt="moon"></img></li>
                    <li><img className='header__parallax-earth' src={earth} alt="comet"></img></li>
                    <li><img src={cometOne} alt="comet"></img></li>
                    <li><img src={cometOne} alt="comet"></img></li>
                    <li><img src={cometTwo} alt="comet"></img></li>
                    <li><img src={cometTwo} alt="comet"></img></li>
                    <li><img src={cometTwo} alt="comet"></img></li>
                    <li><img src={cometTwo} alt="comet"></img></li>
                    <li><img src={cometTwo} alt="comet"></img></li>
                    <li><img src={cometOne} alt="comet"></img></li>
                </ul>
            </div>

            <div className='header__astronaut'>
                <img className='header__astronaut-img' src={astronaut} alt="astronautMove"></img>
            </div>

            <Particles className="header__tsparticles" id="tsparticles" 
                            init={particlesInit} 
                            loaded={particlesLoaded} 
                            options={{
                                background: {
                                color: {
                                    value: "#141416",
                                },
                                },
                                fpsLimit: 120,
                                interactivity: {
                                    detect_on: "canvan",
                                    events: {
                                    onhover: {
                                        enable: true,
                                        mode: "bubble"
                                    },
                                    resize: true
                                    },
                                    modes: {
                                    grab: {
                                        distance: 400,
                                        line_linked: {
                                        opacity: 1
                                        }
                                    },
                                    bubble: {
                                        distance: 170,
                                        size: 5,
                                        duration: 6,
                                        opacity: -1,
                                        speed: 1
                                    },
                                    repulse: {
                                        distance: 100,
                                        duration: 0.4
                                    },
                                    push: {
                                        particles_nb: 4
                                    },
                                    remove: {
                                        particles_nb: 2
                                    }
                                    }
                                },
                                particles: {
                                    number: {
                                    value: 218,
                                    density: {
                                        enable: true,
                                        value_area: 789.1850086415761
                                    }
                                    },
                                    color: {
                                    value: "#ffffff"
                                    },
                                    shape: {
                                    type: "circle",
                                    stroke: {
                                        width: 0,
                                        color: "#000000"
                                    },
                                    polygon: {
                                        nb_sides: 5
                                    }
                                    },
                                    opacity: {
                                    value: 1,
                                    random: true,
                                    anim: {
                                        enable: true,
                                        speed: 1,
                                        opacity_min: 0,
                                        sync: false
                                    }
                                    },
                                    size: {
                                    value: 3,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 5,
                                        size_min: 0.3,
                                        sync: false
                                    }
                                    },
                                    line_linked: {
                                    enable: false,
                                    distance: 150,
                                    color: "#ffffff",
                                    opacity: 0.4,
                                    width: 1
                                    },
                                    move: {
                                    enable: true,
                                    speed: 1,
                                    direction: "none",
                                    random: true,
                                    straight: false,
                                    out_mode: "out",
                                    bounce: false,
                                    attract: {
                                        enable: false,
                                        rotateX: 600,
                                        rotateY: 600
                                    }
                                    }
                                },
                                retina_detect: true
                }}
            />
        </header>
    )
}

export default HeaderSection;