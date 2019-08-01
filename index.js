require('dotenv').config();
require("@babel/register")({
	presets: [
	  "@babel/preset-env",
	  "minify",
	  "@babel/preset-react"
      ]
});
require( "./server" )