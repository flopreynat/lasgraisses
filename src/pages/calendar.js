import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"
import { Container, Row, Col } from "react-bootstrap"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: {frontmatter:{type:{eq:"calendar"}}}
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                        frontmatter {
                            type
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Calendar"/>
            <div className="breadcrumbs">
                <Container>
                    <p>Vous êtes ici: to be replaced</p>
                </Container>  
            </div>
            <div className="pageContent">
                <Container>
                    <Row>
                        <Col>
                            <h1>Calendar</h1>
                            <ol>
                                {data.allMarkdownRemark.edges.map((edge) => {
                                    return (
                                        <li>
                                            <Link to={`/${edge.node.frontmatter.type}/${edge.node.fields.slug}`}>
                                                <h2>{edge.node.frontmatter.title}</h2>
                                                <p>{edge.node.frontmatter.date}</p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default BlogPage