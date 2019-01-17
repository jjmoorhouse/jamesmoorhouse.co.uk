import React, {Fragment} from 'react';
import genericStyles from '../styles/generic.scss';

const ContactPage = () => {
    return <Fragment>
        <title>Contact James Moorhouse</title>
        <h1 className={genericStyles.title}>Contact me</h1><br/>
        <h2 className={genericStyles.secondaryTitle}>Email:</h2>
        <p>jamesmoorhouse@live.co.uk</p>
        <h2 className={genericStyles.secondaryTitle}>Phone:</h2>
        <p>07540306772</p>
    </Fragment>
}

export default ContactPage;