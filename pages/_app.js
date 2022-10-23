import React from 'react';
import Header from "../components/Header/Header";
import genericStyles from '../styles/generic.scss';

function MyApp({ Component, pageProps }) {
    return (<div className='container'>
        <Header/>
        <Component {...pageProps} />
    </div>)
}

export default MyApp
