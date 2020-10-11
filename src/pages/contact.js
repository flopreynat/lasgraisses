import React from 'react'

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <div class="container">
                <div class="pageTitle">
                <h1>Contact</h1>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <p>
                            <h4>Adresse Postale</h4>
                            <ul class="ulNoBullet">
                                <li>MAIRIE</li>
                                <li>12 Place Colonel Charles Du Pin</li>
                                <li>81300 LASGRAÏSSES</li>    
                            </ul>
                            <h4>Téléphone et email</h4>
                            <ul class="ulNoBullet">
                                <li>05 63 33 00 69</li>
                                <li>05 63 81 42 34</li>
                                <li>mairie-de-lasgraisses@e-kiwi.fr</li>
                            </ul>
                        </p>
                    </div>
                    <div class="col-md-7">
                        <p>
                            <h4>Horaires du Secrétariat de Mairie</h4>
                            Du Lundi au Vendredi de 08h30 à 12h30
                            <br/><br/>Monsieur le Maire reçoit le Mardi matin.
                            <br/>Monsieur le 1er Adjoint reçoit le Vendredi matin.
                            <br/>Tous les autres rendez-vous peuvent faire l'objet d'une demande par mail ou auprès du Secrétariat.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage