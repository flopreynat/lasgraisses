import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from "../components/head";
import { Container, Row, Col } from "react-bootstrap"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
          <Head title={props.data.markdownRemark.frontmatter.title} />
          <div className="breadcrumbs">
            <Container>
              <p>Vous êtes ici: to be replaced</p>
            </Container>  
          </div>
          <div className="pageContent">
            <Container>
              <Row>
                <Col>
                  <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                  <p>{props.data.markdownRemark.frontmatter.date}</p>
                  <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                </Col>
              </Row>
            </Container>
          </div>
        </Layout>
    )
}

export default Blog