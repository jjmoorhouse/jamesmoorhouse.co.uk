import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    };

    render() {
        return (
            <html>
                <Head>
                    <link rel='stylesheet'
                          type='text/css'
                          href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
                    />
                    <link rel="icon"
                          type="image/png"
                          href="/static/images/favicon.ico"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    };
};
