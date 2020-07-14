import React from 'react'

import Layout from '../components/layout';
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div className="">
            <Head title="Contact"/>
            <Layout>
                <h1>contact me!</h1>
                <ul>
                    <li>
                        <a href="">github</a>
                        </li>
                    <li>
                        <a href="">twitter</a>
                        </li>
                    <li>
                        <a href="">linkedin</a>
                        </li>
                    <li>
                        <a href="">medium</a>
                        </li>
                    <li>
                        <a href="">email</a>
                    </li>
                </ul>
            </ Layout>
        </div>
    )
}

export default ContactPage; 