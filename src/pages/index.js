import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Joel Shapiro" />
    <h1>Joel Shapiro</h1>
    <p>Min hemsida</p>
    <p>Testar automatiskt bygge med circleci pushat till firebase</p>
    <p>Med PR...</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
