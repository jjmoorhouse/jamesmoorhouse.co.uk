import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    return (<div className='row'>
        <div className='col-lg-8'>
            <title>James Moorhouse - Software Engineer, Barcelona</title>
            <h1 className='title'>Software Engineer, Barcelona</h1>
            <p>
                An experienced full stack developer with both team and project leadership experience. My recent work has
                been focused on the frontend, using React, although I’m currently looking to return to a full stack
                role. I have a strong background across the stack including knowledge of devops tools such as AWS and
                chef. As a developer I take pride in delivering well tested, performant code which is easy to read and
                maintain.
            </p>
            <p><Link href='/about'><a href='/about'>A bit more about myself</a></Link></p>
            <h1 className='title'>Tech Stack</h1>
            <p>JavaScript, NodeJS, TypeScript, React (Isomorphic - with Next.js), Redux, GraphQL, Apollo, Flux, Jest,
                Mocha, Enzyme, webpack, PHP, PHPUnit RequireJs, ZF2, Slim, REST, microservices, Redis, MySQL, MongoDB,
                Chef, Vagrant, VirtualBox, git, Bitbucket, Github, OSX, Linux, Rollbar, Sentry, New Relic</p>
        </div>
        <div className='col-lg-4'>
            <img
                src='/static/images/roundel.jpg'
                alt='London Underground Roundel which says "developer"'
                className='responsiveImage'
            />
        </div>

    </div>);

}

export default HomePage;
