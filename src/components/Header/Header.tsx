import React from "react";
import style from "./Header.module.css"
import logo from "../../assets/images/headerimg/Alexander.svg"

const Header = () => {
    return <div className={style.Wrapper}>
        <img src={logo} className={style.Logo}></img>
        <div className={style.NavigationList}>
            <div>
            <a href="/">Hem</a>
            </div>
            <div>
            <a href="/">Om mig</a>
            </div>
            <div>
            <a href="/">Mina projekt</a>
            </div>
            <div>
            <a href="/">Mitt CV</a>
            </div>
            <div>
            <a href="/">Kontakta mig</a>
            </div>
        </div>
    </div>
}

export default Header;