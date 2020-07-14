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
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString: "MMMM Do, YYYY")
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
                        data.allContentfulBlogPost.edges.map((edge) => {
                            return (
                                <li className={blogStyles.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                        <p>{edge.node.publishedDate}</p>
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