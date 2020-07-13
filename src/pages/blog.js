import React from 'react'
import {
    graphql,
    useStaticQuery } from 'gatsby'

import Layout from '../components/layout';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <h1>My Japanese adventure!</h1>

                <ol>
                    {
                        data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <li>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </li>
                            )
                        })
                    }
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage;

// goal: create an about page and a contact page
// 1. crate an about page; include an h1 and bio
// 2. create a contact page; include an h1 and contact detail