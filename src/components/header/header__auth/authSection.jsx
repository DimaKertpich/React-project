import React, {useState, useEffect, useRef} from 'react';
import './authSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { activeControlAuth } from '../../../store/authUserSlice';

function AuthSection(){
    let [toggleAuth, setToggleAuth] = useState(true);

    let auth = useRef();
    let registr = useRef();
    let formLogin = useRef();
    let formRegist = useRef();

    let [arrayAuth, setArrayAuth] = useState([
        {
            text: 'Email',
            value: '',
            pattern: /^[a-z,A-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            checked: false,
            activeCheck: false,
            type: "text",
            id: 0
        },
        {
            text: 'Password',
            value: '',
            pattern: /.+/,
            checked: false,
            activeCheck: false,
            type: "password",
            id: 1
        }
    ])

    let [arrayRegistr, setArrayRegistr] = useState([
        {
            text: 'Email',
            value: '',
            pattern: /^[a-z,A-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            checked: false,
            activeCheck: false,
            type: "text",
            id: 0
        },
        {
            text: 'Password',
            value: '',
            pattern: /.+/,
            checked: false,
            activeCheck: false,
            type: "password",
            id: 1   
        },
        {
            text: 'Repeat Password',
            value: '',
            pattern: /.+/,
            checked: false,
            activeCheck: false,
            type: "password",
            id: 2   
        }
    ])

    useEffect(() =>{
        auth.current = document.querySelector('.auth__login')
        registr.current = document.querySelector('.auth__registr')
        formLogin.current = document.querySelector('.auth__wrapper-login')
        formRegist.current = document.querySelector('.auth__wrapper-registr')
        
        auth.current.classList.add('activeAuthTitle')

        if(toggleAuth === false){
            registr.current.classList.add('activeAuthTitle')
            auth.current.classList.remove('activeAuthTitle')
            formLogin.current.classList.remove('moveLogin')
            formRegist.current.classList.add('moveRegistr')
        }else{
            registr.current.classList.remove('activeAuthTitle')
            auth.current.classList.add('activeAuthTitle')
            formLogin.current.classList.add('moveLogin')
            formRegist.current.classList.remove('moveRegistr')
        }

    }, [toggleAuth])

    function toggleForm(value){
       if(value === 'login'){
        setToggleAuth(toggleAuth = true)
       }else if(value === 'registr'){
        setToggleAuth(toggleAuth = false)
       }
    }

    function validInfoLogin(value, id){
        setArrayAuth(arrayAuth.map((obj) => {
            if(obj.pattern.test(value) && obj.id === id){
                return {...obj, value: value, checked: true, activeCheck: true}
            }else if(!obj.pattern.test(value) && obj.id === id){
                return {...obj, checked: false, activeCheck: true}
            }else{
                return obj;
            }
        }))
    }

    let showArrayAuth = arrayAuth.map((obj) => (
        <div key={obj.id} className="auth__signIn">
            <div className="auth__signIn-text">
                <label>{ obj.text }
                { obj.activeCheck === true &&
                    <span>
                        {obj.checked === false && <FontAwesomeIcon className="auth__signIn-data-cross" icon={faXmark} />}
                        {obj.checked === true && <FontAwesomeIcon className="auth__signIn-data-check" icon={faCheck} />}
                    </span>
                }

                </label>
            </div>
            <div className="auth__signIn-info">
                <input onChange={(e) => validInfoLogin(e.target.value, obj.id)} type={obj.type}></input>
            </div>
        </div>  
    ))

    function validInfoRegistr(value, id){
        setArrayRegistr(arrayRegistr.map((obj) =>{
            if(obj.pattern.test(value) && obj.id === id){
                return {...obj, value: value, checked: true, activeCheck: true}
            }else if(!obj.pattern.test(value) && obj.id === id){
                return {...obj, value: value, checked: false, activeCheck: true};
            }else{
                return obj;
            }
        }))
    }

    let showArrayRegistr = arrayRegistr.map((obj) =>(
        <div key={obj.id} className="auth__signUp">
            <div className="auth__signUp-text">
                <label>{ obj.text }
                { obj.activeCheck === true &&
                    <span>
                        {obj.checked === false && <FontAwesomeIcon className="auth__signIn-data-cross" icon={faXmark} />}
                        {obj.checked === true && <FontAwesomeIcon className="auth__signIn-data-check" icon={faCheck} />}
                    </span>
                }
                
                </label>
            </div>
            <div className="auth__signUp-info">
                <input onChange={(e) => validInfoRegistr(e.target.value, obj.id)} type={obj.type}></input>
            </div>
        </div>
    ))

    let boolCheck = false;

    function activeBtnLogin(index){

        if(arrayAuth[index].checked){
            if(index === (arrayAuth.length - 1)  ){
                boolCheck = true;
            }

            if(index < (arrayAuth.length - 1) ){
                activeBtnLogin(++index);
            }
        }

        if(boolCheck === true){
            return true
        }else{
            return false
        }

    }

    const dispatch = useDispatch();
    const hideAuth = () => dispatch(activeControlAuth(false))

    return(
        <section className="auth">
            <div className="auth__title">
                <h4 onClick={() => toggleForm('login')} className="auth__login">Authorization</h4>
                <h4 onClick={() => toggleForm('registr')} className="auth__registr">Registration</h4>
            </div>
            <div className="auth__wrapper">
               <div className="auth__wrapper-login">
                { showArrayAuth }

                <div className="auth__btn">
                    <button onClick={hideAuth} type="button">Later</button>
                    <button type="button" disabled={!activeBtnLogin(0)}>Login</button>
                </div>
               </div>
               <div className="auth__wrapper-registr">
                    { showArrayRegistr }

                    <div className="auth__btn">
                        <button onClick={hideAuth} type="button">Later</button>
                        <button type="button">Login</button>
                    </div>
               </div>
            </div>
            
        </section>
    )
}

export default AuthSection;