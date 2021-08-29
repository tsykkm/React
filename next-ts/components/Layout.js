import React from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style'

const Layout = props => {
    return (
        <>
            {/* <Header header={props.header} title={props.title}/>
                {props.children}
            <Footer footer={'copyright toshi'} /> */}
            <Head>
                <title>{props.title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            {style}
            <Header header={props.header} title={props.title} />
                {props.children}
            <Footer footer='copyright toshi'/>
        </>
    )
}

export default Layout;