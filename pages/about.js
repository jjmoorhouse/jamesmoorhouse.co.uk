import React, {Fragment} from 'react';
import genericStyles from '../styles/generic.scss';

const About = () => {
    return (
        <div>
            <title>About James Moorhouse - Software Engineer</title>
            <div className='row'>
                <div className='col-lg-8'>
                    <h1 className={genericStyles.title}>The Software Engineer</h1>
                    <p>Wow, you made it as far as the "about me" page, I'm impressed ;) Well, here goes...</p>
                    <p>
                        Since around age 13, I've been toying with computers, predominantly web based tech. From here, I begun creating
                        websites for local businesses, went to University for a degree in Computer Science and then landed myself various
                        roles as a Software Engineer
                    </p>
                    <p>
                        Software wise, my passion lies in creating simple, easy to read code with a mind for performance.
                        I've worked on some truly huge scale apps before (200+ transactions per second) as well as smaller apps which needed
                        to be completed on a budget.
                    </p>
                    <p>
                        I'm much more of a team player than I am a lone wolf. Give me code review and mentoring junior staff over
                        hacking away on my own for a month. I've worked with Architects, Testers, Business Analysts and other Software Engineers
                        to lead the technical delivery of business critical projects.
                    </p>
                </div>
                <div className='col-lg-4'>
                    <img
                        src='/static/images/profile.jpg'
                        alt='Profile Picture of James, against a blue background'
                        className={genericStyles.responsiveImage}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-8'>
                    <h1 className={genericStyles.title}>The Human Being</h1>
                    <p>Wait, shouldn't this have come first...?</p>
                    <p>Outside of work I have many interests including food, travelling and <b>coffee.</b> Doesn't everyone?</p>
                    <p>
                        Besides the obvious ones, I'm a keen runner and snowboarder - you'll find me in the mountains at least once a year,
                        and I frequently attend the local gym in order to lift heavy weights above my head.
                    </p>
                    <p>
                        I'm currently working on my own piece of software to make trades on and collect data from the Betfair Exchange.
                        This allows me to pursue my passion for (profitable) betting that I picked up whilst working at SkyBet as well
                        as gain experience using new technology I otherwise wouldn't be during the day job.
                    </p>
                    <p>Sprinkle a bit of foreign language learning and reading on top of all that and that's just about all you need to know.</p>
                    <p>A few of my favourite books so far:</p>
                    <ul>
                        <li>The Subtle Art of Not Giving a F*ck - Mark Manson (sorry if you don't like reading swear words on the internet!)</li>
                        <li>The Dip - Seth Godin</li>
                        <li>Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts - Annie Duke</li>
                        <li>Thinking, Fast and Slow - Daniel Kahneman</li>
                    </ul></div>
                <div className='col-lg-4'>
                    <img
                        src='/static/images/snowboard.jpg'
                        alt='James Snowboarding'
                        className={genericStyles.responsiveImage}
                    />
                </div>
            </div>

            <h1 className={genericStyles.title}>Strengths</h1>
            <p>From the <a href='https://www.gallupstrengthscenter.com/'>Clifton Strengths Finder</a></p>
            <h2 className={genericStyles.secondaryTitle}>1. Restorative</h2>
            <p>People who are especially talented in the Restorative theme are adept at dealing with problems. They
                are good at figuring out what is wrong and resolving it.</p>
            <h2 className={genericStyles.secondaryTitle}>2. Analytical</h2>
            <p>People who are especially talented in the Analytical theme search for reasons and causes. They have
                the ability to think about all the factors that might affect a situation.</p>
            <h2 className={genericStyles.secondaryTitle}>3. Responsibility</h2>
            <p>People who are especially talented in the Responsibility theme take psychological ownership of what
                they say they will do. They are committed to stable values such as honesty and loyalty.</p>
            <h2 className={genericStyles.secondaryTitle}>4. Focus</h2>
            <p>People who are especially talented in the Focus theme can take a direction, follow through, and make
                the corrections necessary to stay on track. They prioritize, then act.</p>
            <h2 className={genericStyles.secondaryTitle}>5. Relator</h2>
            <p>People who are especially talented in the Relator theme enjoy close relationships with others. They
                find deep satisfaction in working hard with friends to achieve a goal.</p>
        </div>
    )
}
export default About;