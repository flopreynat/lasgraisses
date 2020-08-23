import React from 'react'
import Head from "../components/head"
import indexStyles from '../components/index.scss'
import 'typeface-open-sans'
import logo from '../images/logos/logo.jpg'

const IndexPage = () => {
    return (
        <>
            <Head title="Bienvenue"/>
            <div className="fullBackgroundImage">

            </div>
            <div className="absolutePos1">
                <img src={logo} alt="Logo" className="logoMairie" />
                <h3>Bienvenue à</h3>
                <h1>Lasgraïsses</h1>
            </div>
            <div className="absolutePos2">
                <p>Notre nouveau site est en construction...</p>
            </div>
        </>
    )
}

export default IndexPage