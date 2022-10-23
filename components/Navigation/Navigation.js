import React from 'react';
import Link from "next/link";
import styles from './Navigation.module.scss';

const Navigation = () => {
    return <ul className={styles.navigation}>
        <li className={styles.item}><Link href='/'><a>Home</a></Link></li>
        <li className={styles.item}><Link href='/about'><a>About</a></Link></li>
        <li className={styles.item}><Link href='/contact'><a>Contact</a></Link></li>
    </ul>
};

export default Navigation;
