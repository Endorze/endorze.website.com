import React from "react";
import style from "./Footer.module.css"
import facebookimg from "../../assets/images/footerimg/4102573_applications_facebook_media_social_icon.png"
import instagramimg from "../../assets/images/footerimg/1298747_instagram_brand_logo_social media_icon.png"
import linkedinimg from "../../assets/images/footerimg/5296501_linkedin_network_linkedin logo_icon.png"
import logo from "../../assets/images/headerimg/Alexander.svg"

const Footer = () => {

    const date = new Date().getFullYear();

    return <div className={style.Wrapper}>
        <div className={style.MediaLinks}>
            <div className={style.Line}></div>
            <ul>
                <li><a href="https://web.facebook.com/profile.php?id=100008084297525" target="_blank"><img src={facebookimg}></img></a></li>
                <li><a href="https://www.instagram.com/alexander_webdev/" target="_blank"><img src={instagramimg}></img></a></li>
                <li><a href="https://www.linkedin.com/in/alexander-hallgren-5a4a501aa/" target="_blank"><img src={linkedinimg}></img></a></li>
            </ul>
            <div className={style.Line}></div>
        </div>
        <div className={style.LogoCopyright}>
            <img src={logo} className={style.Logo}></img>
            <p>Copyright &copy; {date} Alexander Production</p>
        </div>
    </div>
}

export default Footer;