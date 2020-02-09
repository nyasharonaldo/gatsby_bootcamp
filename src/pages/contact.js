import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title='Contact Us'/>
        <h1>Contact Page</h1>
        <p>
          {" "}
          <strong>Name: </strong> Nyasha{" "}
        </p>
        <p>
          {" "}
          <strong>Address: </strong> 2100 Suck Ya Mum Boulevard{" "}
        </p>
        <p>
          {" "}
          <strong>Email: </strong> nmronaldo@gmail.com{" "}
        </p>
        <p>
          {" "}
          <strong>Number: </strong> 07841377640{" "}
        </p>
        <p>
          {" "}
          <strong>Research: </strong>
          <a href="https://www.google.com" target="_blank">
            Click me
          </a>{" "}
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
