import React from "react";
import styles from './Header.module.scss';
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return <header className={styles.header}>
        <img
            src='/static/images/logo.png'
            alt='Logo for James Moorhouse Consulting Limited. M character inside red box'
            className={styles.logo}
        />
        <Navigation/>
    </header>
}

export default Header;
