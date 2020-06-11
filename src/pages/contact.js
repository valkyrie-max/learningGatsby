import React from 'react'

import Footer from '../components/footer';
import Header from  '../components/header'

const ContactPage = () => {
    return (
        <div className="">
            <Header />
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

            <Footer />
        </div>
    )
}

export default ContactPage; 