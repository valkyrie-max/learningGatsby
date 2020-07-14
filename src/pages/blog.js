import React from 'react'
import {
    Link,
    graphql,
    useStaticQuery } from 'gatsby'

import blogStyles from './blog.module.scss'
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
                        fields {
                            slug
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

                <ol className={blogStyles.posts}>
                    {
                        data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <li className={blogStyles.post}>
                                    <Link to={`/blog/${edge.node.fields.slug}`}>
                                        <h2>{edge.node.frontmatter.title}</h2>
                                        <p>{edge.node.frontmatter.date}</p>
                                    </Link>
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