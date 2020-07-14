import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="Not Found!"/>
            <h1>page not found</h1>

            <p><Link to="/">Head HOME</Link></p>
        </Layout>
    )
}

export default NotFound