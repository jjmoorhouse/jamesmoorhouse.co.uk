import React from 'react';
import App, { Container } from 'next/app';
import Link from 'next/link';

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <div className='container'>
                    <header>
                        <img
                            src='/static/images/logo.png'
                            alt='Logo for James Moorhouse Consulting Limited. M character inside red box'
                        />
                        <ul>
                            <li><Link href='/'><a>Home</a></Link></li>
                            <li><Link href='/about'><a>About</a></Link></li>
                            <li><Link href='/services'><a>Services</a></Link></li>
                            <li><Link href='/contact'><a>Contact</a></Link></li>
                        </ul>
                    </header>
                    <Component {...pageProps} />
                    <footer>
                        07540 306 772 // jamesmoorhouse@live.co.uk
                    </footer>
                </div>
            </Container>
        )
    }
}