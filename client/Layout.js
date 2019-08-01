import React from 'react';
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import {Helmet} from "react-helmet";

export default ({ Page, location, props }) =>(
<>
    <Helmet>
        <title>Demo Eshop</title>
        <link rel="stylesheet" href="/css/styles.css"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>    
    </Helmet>
    <Navbar/> 
    {typeof Page === 'function' 
        ? <Page {...props} {...location}/>    
        : <Page.type {...Page.props} {...props} {...location}/>
    }
    <div id="myModal" class="myModal">
        <div class="modal-header"></div>
        <div class="modal-body">
            <span>Succes!</span>
            <button id="modal-button">OK</button>
        </div>
    </div>
    <Footer/>
    <script type="text/javascript" src="../js/script.js"></script>
</> 
);