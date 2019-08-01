import React from 'react';
import {Helmet} from "react-helmet";

export default ({message, status}) => (
    <div id="notfound">
		<Helmet>
			<title>error</title>
			<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet"/>
			<link type="text/css" rel="stylesheet" href="../css/error-style.css" />
		</Helmet>
		<div class="notfound">
			<div class="notfound-404">
				<h3>{message}</h3>
				<h1>{status}</h1>
			</div>
			{/* <h2>Ne cerem scuze, dar pagina solicitata nu a fost gasita</h2> */}
		</div>
	</div>
);